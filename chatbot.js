class Chatbot {
    constructor() {
        console.log('Starting Chatbot initialization...');
        
        // Check if CONFIG is loaded
        if (typeof CONFIG === 'undefined') {
            console.error('ERROR: CONFIG is not loaded! Make sure config.js is loaded before chatbot.js');
            alert('Configuration error: CONFIG not found. Please check that config.js is loaded properly.');
            return;
        }
        
        console.log('CONFIG loaded successfully:', CONFIG);
        
        this.chatMessages = document.getElementById('chatMessages');
        this.userInput = document.getElementById('userInput');
        this.sendButton = document.getElementById('sendButton');
        this.voiceBtn = document.getElementById('voiceBtn');
        this.speakBtn = document.getElementById('speakBtn');
        this.voiceTranslateBtn = document.getElementById('voiceTranslateBtn');
        this.imageUploadBtn = document.getElementById('imageUploadBtn');
        this.imageInput = document.getElementById('imageInput');
        this.fileUploadBtn = document.getElementById('fileUploadBtn');
        this.fileInput = document.getElementById('fileInput');
        this.pasteBtn = document.getElementById('pasteBtn');
        this.voiceIndicator = document.getElementById('voiceIndicator');
        
        // Debug: Check if elements exist
        console.log('DOM Elements Check:');
        console.log('chatMessages:', this.chatMessages);
        console.log('userInput:', this.userInput);
        console.log('sendButton:', this.sendButton);
        
        if (!this.chatMessages) {
            console.error('ERROR: chatMessages element not found!');
            alert('HTML error: chatMessages element not found. Please check index.html');
            return;
        }
        
        if (!this.userInput) {
            console.error('ERROR: userInput element not found!');
            alert('HTML error: userInput element not found. Please check index.html');
            return;
        }
        
        if (!this.sendButton) {
            console.error('ERROR: sendButton element not found!');
            alert('HTML error: sendButton element not found. Please check index.html');
            return;
        }
        
        // Google AI API configuration
        try {
            this.apiKey = CONFIG.API_KEY;
            this.apiUrl = `${CONFIG.API_ENDPOINTS.GEMINI_PRO}?key=${this.apiKey}`;
            this.visionApiUrl = `${CONFIG.API_ENDPOINTS.GEMINI_VISION}?key=${this.apiKey}`;
            this.proApiUrl = `${CONFIG.API_ENDPOINTS.GEMINI_PRO_LATEST}?key=${this.apiKey}`;
            
            console.log('API URLs configured:');
            console.log('Main API:', this.apiUrl);
            console.log('Vision API:', this.visionApiUrl);
        } catch (error) {
            console.error('Error configuring API URLs:', error);
            alert('Configuration error: Unable to set up API URLs. Check CONFIG object.');
            return;
        }
        
        // Conversation history for context
        this.conversationHistory = [];
        
        // Voice and speech functionality
        this.recognition = null;
        this.synthesis = window.speechSynthesis;
        this.isRecording = false;
        this.isSpeaking = false;
        this.isTranslating = false;
        this.selectedImage = null;
        this.selectedFile = null;
        this.sourceLanguage = 'en-US';
        this.targetLanguage = 'es';
        
        // Connection status
        this.connectionStatus = document.getElementById('connectionStatus');
        
        console.log('Initializing event listeners...');
        this.initializeEventListeners();
        
        console.log('Initializing voice recognition...');
        this.initializeVoiceRecognition();
        
        console.log('Setting up time updates...');
        this.updateTime();
        
        console.log('Checking connection...');
        this.checkConnection();
        
        console.log('Chatbot initialization completed successfully!');
    }

    initializeEventListeners() {
        // Send button click
        this.sendButton.addEventListener('click', () => this.sendMessage());
        
        // Enter key press
        this.userInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.sendMessage();
            }
        });
        
        // Voice button click
        this.voiceBtn.addEventListener('click', () => this.toggleVoiceRecording());
        
        // Speak button click
        this.speakBtn.addEventListener('click', () => this.toggleTextToSpeech());
        
        // Voice translate button click
        this.voiceTranslateBtn.addEventListener('click', () => this.showLanguageModal());
        
        // Image upload button click
        this.imageUploadBtn.addEventListener('click', () => this.imageInput.click());
        
        // Image input change
        this.imageInput.addEventListener('change', (e) => this.handleImageUpload(e));
        
        // File upload button click
        this.fileUploadBtn.addEventListener('click', () => this.fileInput.click());
        
        // File input change
        this.fileInput.addEventListener('change', (e) => this.handleFileUpload(e));
        
        // Paste button click
        this.pasteBtn.addEventListener('click', () => this.pasteFromClipboard());
        
        // Menu button click
        document.getElementById('menuBtn').addEventListener('click', () => this.showOptionsMenu());
        
        // Close modal
        document.getElementById('closeModal').addEventListener('click', () => this.hideOptionsMenu());
        
        // Close modal when clicking outside
        document.getElementById('optionsModal').addEventListener('click', (e) => {
            if (e.target.id === 'optionsModal') {
                this.hideOptionsMenu();
            }
        });

        // Language modal events
        document.getElementById('closeLanguageModal').addEventListener('click', () => this.hideLanguageModal());
        document.getElementById('startVoiceTranslation').addEventListener('click', () => this.startVoiceTranslation());
        document.getElementById('cancelTranslation').addEventListener('click', () => this.hideLanguageModal());
        
        // Close language modal when clicking outside
        document.getElementById('languageModal').addEventListener('click', (e) => {
            if (e.target.id === 'languageModal') {
                this.hideLanguageModal();
            }
        });
        
        // Auto-resize input and focus
        this.userInput.addEventListener('input', this.handleInputResize.bind(this));
        this.userInput.focus();
    }

    handleInputResize() {
        const value = this.userInput.value;
        if (value.length > 450) {
            this.userInput.style.borderColor = '#ff6b6b';
        } else {
            this.userInput.style.borderColor = '#e0e0e0';
        }
    }

    toggleVoiceRecording() {
        if (!this.recognition) {
            this.showNotification('Voice recognition not supported in this browser');
            return;
        }
        
        if (this.isRecording) {
            this.recognition.stop();
        } else {
            this.recognition.start();
        }
    }

    stopVoiceRecording() {
        this.isRecording = false;
        this.voiceBtn.classList.remove('recording');
        this.voiceIndicator.style.display = 'none';
        this.userInput.placeholder = 'Type your message...';
    }

    toggleTextToSpeech() {
        if (this.isSpeaking) {
            this.synthesis.cancel();
            this.isSpeaking = false;
            this.speakBtn.classList.remove('active');
        } else {
            const lastBotMessage = document.querySelector('.bot-message:last-child .message-text');
            if (lastBotMessage) {
                this.speakText(lastBotMessage.textContent);
            } else {
                this.showNotification('No message to speak');
            }
        }
    }

    speakText(text) {
        if (!text) return;
        
        this.synthesis.cancel();
        
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = 0.9;
        utterance.pitch = 1;
        utterance.volume = 1;
        
        utterance.onstart = () => {
            this.isSpeaking = true;
            this.speakBtn.classList.add('active');
        };
        
        utterance.onend = () => {
            this.isSpeaking = false;
            this.speakBtn.classList.remove('active');
        };
        
        utterance.onerror = () => {
            this.isSpeaking = false;
            this.speakBtn.classList.remove('active');
        };
        
        this.synthesis.speak(utterance);
    }

    showLanguageModal() {
        const modal = document.getElementById('languageModal');
        if (modal) {
            modal.style.display = 'flex';
        }
    }

    hideLanguageModal() {
        const modal = document.getElementById('languageModal');
        if (modal) {
            modal.style.display = 'none';
        }
    }

    startVoiceTranslation() {
        // Get selected languages
        this.sourceLanguage = document.getElementById('sourceLanguage').value;
        this.targetLanguage = document.getElementById('targetLanguage').value;
        
        this.hideLanguageModal();
        this.initializeVoiceTranslation();
    }

    initializeVoiceTranslation() {
        if (!('webkitSpeechRecognition' in window || 'SpeechRecognition' in window)) {
            this.showNotification('Voice recognition not supported in this browser', 'error');
            return;
        }

        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        this.translationRecognition = new SpeechRecognition();
        
        this.translationRecognition.continuous = false;
        this.translationRecognition.interimResults = false;
        this.translationRecognition.lang = this.sourceLanguage;
        
        this.translationRecognition.onstart = () => {
            this.isTranslating = true;
            this.voiceTranslateBtn.classList.add('translating');
            this.voiceIndicator.style.display = 'flex';
            this.userInput.placeholder = `Listening in ${this.getLanguageName(this.sourceLanguage)}...`;
            this.showNotification(`🎤 Speak in ${this.getLanguageName(this.sourceLanguage)} to translate to ${this.getLanguageName(this.targetLanguage)}`, 'info');
        };
        
        this.translationRecognition.onresult = (event) => {
            const transcript = event.results[0][0].transcript;
            this.voiceIndicator.style.display = 'none';
            this.userInput.placeholder = 'Translating...';
            this.translateText(transcript);
        };
        
        this.translationRecognition.onerror = (event) => {
            console.error('Translation speech recognition error:', event.error);
            this.stopVoiceTranslation();
            this.showNotification('Voice translation error. Please try again.', 'error');
        };
        
        this.translationRecognition.onend = () => {
            this.stopVoiceTranslation();
        };

        this.translationRecognition.start();
    }

    async translateText(text) {
        try {
            // Enhanced translation prompt for Indian languages
            const isIndianSource = this.isIndianLanguage(this.sourceLanguage);
            const isIndianTarget = this.isIndianLanguage(this.targetLanguage);
            
            let translationPrompt = '';
            if (isIndianSource || isIndianTarget) {
                translationPrompt = `You are an expert translator specializing in Indian languages. Translate the following text from ${this.getLanguageName(this.sourceLanguage)} to ${this.getLanguageName(this.targetLanguage)}. 

Please provide:
1. Accurate translation maintaining cultural context
2. Preserve honorifics and formal/informal tone
3. Keep cultural references and expressions intact
4. For Indian languages, maintain regional nuances

Text to translate: "${text}"

Provide only the translation, no additional explanations:`;
            } else {
                translationPrompt = `Translate the following text from ${this.getLanguageName(this.sourceLanguage)} to ${this.getLanguageName(this.targetLanguage)}. Only provide the translation, no additional text:

"${text}"`;
            }

            // Display original text
            this.displayMessage(`🎤 Original (${this.getLanguageName(this.sourceLanguage)}): "${text}"`, 'user');
            
            // Show typing indicator
            this.showTypingIndicator();
            
            // Get translation from AI
            const response = await this.generateTranslationResponse(translationPrompt, text);
            
        } catch (error) {
            console.error('Translation error:', error);
            this.hideTypingIndicator();
            this.displayMessage('Sorry, translation failed. Please try again.', 'bot');
            this.showNotification('Translation error occurred', 'error');
        }
    }

    isIndianLanguage(langCode) {
        const indianLanguages = ['hi', 'hi-IN', 'bn', 'bn-IN', 'te', 'te-IN', 'ta', 'ta-IN', 
                               'mr', 'mr-IN', 'gu', 'gu-IN', 'kn', 'kn-IN', 'ml', 'ml-IN', 
                               'pa', 'pa-IN', 'or', 'or-IN', 'as', 'as-IN', 'ur', 'ur-IN'];
        return indianLanguages.includes(langCode);
    }

    async generateTranslationResponse(prompt, originalText) {
        try {
            const requestBody = {
                contents: [{
                    parts: [{
                        text: prompt
                    }]
                }],
                generationConfig: {
                    temperature: 0.3,
                    topK: 20,
                    topP: 0.8,
                    maxOutputTokens: 1024
                },
                safetySettings: [
                    {
                        category: "HARM_CATEGORY_HARASSMENT",
                        threshold: "BLOCK_MEDIUM_AND_ABOVE"
                    },
                    {
                        category: "HARM_CATEGORY_HATE_SPEECH",
                        threshold: "BLOCK_MEDIUM_AND_ABOVE"
                    },
                    {
                        category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
                        threshold: "BLOCK_MEDIUM_AND_ABOVE"
                    },
                    {
                        category: "HARM_CATEGORY_DANGEROUS_CONTENT",
                        threshold: "BLOCK_MEDIUM_AND_ABOVE"
                    }
                ]
            };

            const response = await fetch(this.apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestBody)
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            
            if (data.candidates && data.candidates[0] && data.candidates[0].content && data.candidates[0].content.parts && data.candidates[0].content.parts[0]) {
                const translation = data.candidates[0].content.parts[0].text.trim();
                
                this.hideTypingIndicator();
                this.displayMessage(`🌐 Translation (${this.getLanguageName(this.targetLanguage)}): "${translation}"`, 'bot');
                
                // Speak the translation
                this.speakTranslation(translation);
                
                this.conversationHistory.push({
                    role: 'assistant',
                    content: `Translation: ${translation}`
                });
                
                this.updateConnectionStatus('Online', 'success');
            } else {
                throw new Error('Invalid translation response');
            }
            
        } catch (error) {
            console.error('Error generating translation:', error);
            this.hideTypingIndicator();
            this.displayMessage('Sorry, I encountered an error during translation. Please try again.', 'bot');
        }
    }

    speakTranslation(text) {
        if (!text) return;
        
        this.synthesis.cancel();
        
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = 0.9;
        utterance.pitch = 1;
        utterance.volume = 1;
        utterance.lang = this.getLanguageCode(this.targetLanguage);
        
        utterance.onstart = () => {
            this.isSpeaking = true;
            this.speakBtn.classList.add('active');
        };
        
        utterance.onend = () => {
            this.isSpeaking = false;
            this.speakBtn.classList.remove('active');
        };
        
        utterance.onerror = () => {
            this.isSpeaking = false;
            this.speakBtn.classList.remove('active');
        };
        
        this.synthesis.speak(utterance);
    }

    stopVoiceTranslation() {
        this.isTranslating = false;
        this.voiceTranslateBtn.classList.remove('translating');
        this.voiceIndicator.style.display = 'none';
        this.userInput.placeholder = 'Type your message...';
    }

    getLanguageName(langCode) {
        const languages = {
            'en-US': 'English',
            'en': 'English',
            'hi-IN': 'हिंदी (Hindi)',
            'hi': 'हिंदी (Hindi)',
            'bn-IN': 'বাংলা (Bengali)',
            'bn': 'বাংলা (Bengali)',
            'te-IN': 'తెలుగు (Telugu)',
            'te': 'తెలుగు (Telugu)',
            'ta-IN': 'தமிழ் (Tamil)',
            'ta': 'தமிழ் (Tamil)',
            'mr-IN': 'मराठी (Marathi)',
            'mr': 'मराठी (Marathi)',
            'gu-IN': 'ગુજરાતી (Gujarati)',
            'gu': 'ગુજરાતી (Gujarati)',
            'kn-IN': 'ಕನ್ನಡ (Kannada)',
            'kn': 'ಕನ್ನಡ (Kannada)',
            'ml-IN': 'മലയാളം (Malayalam)',
            'ml': 'മലയാളം (Malayalam)',
            'pa-IN': 'ਪੰਜਾਬੀ (Punjabi)',
            'pa': 'ਪੰਜਾਬੀ (Punjabi)',
            'or-IN': 'ଓଡ଼ିଆ (Odia)',
            'or': 'ଓଡ଼ିଆ (Odia)',
            'as-IN': 'অসমীয়া (Assamese)',
            'as': 'অসমীয়া (Assamese)',
            'ur-IN': 'اردو (Urdu)',
            'ur': 'اردو (Urdu)',
            'es-ES': 'Spanish',
            'es': 'Spanish',
            'fr-FR': 'French',
            'fr': 'French',
            'de-DE': 'German',
            'de': 'German',
            'it-IT': 'Italian',
            'it': 'Italian',
            'pt-BR': 'Portuguese',
            'pt': 'Portuguese',
            'ru-RU': 'Russian',
            'ru': 'Russian',
            'ja-JP': 'Japanese',
            'ja': 'Japanese',
            'ko-KR': 'Korean',
            'ko': 'Korean',
            'zh-CN': 'Chinese',
            'zh': 'Chinese',
            'ar-SA': 'Arabic',
            'ar': 'Arabic'
        };
        return languages[langCode] || langCode;
    }

    getLanguageCode(langCode) {
        // Convert to speech synthesis language codes
        const speechCodes = {
            'en': 'en-US',
            'hi': 'hi-IN',
            'bn': 'bn-IN',
            'te': 'te-IN',
            'ta': 'ta-IN',
            'mr': 'mr-IN',
            'gu': 'gu-IN',
            'kn': 'kn-IN',
            'ml': 'ml-IN',
            'pa': 'pa-IN',
            'or': 'or-IN',
            'as': 'as-IN',
            'ur': 'ur-IN',
            'es': 'es-ES',
            'fr': 'fr-FR',
            'de': 'de-DE',
            'it': 'it-IT',
            'pt': 'pt-BR',
            'ru': 'ru-RU',
            'ja': 'ja-JP',
            'ko': 'ko-KR',
            'zh': 'zh-CN',
            'ar': 'ar-SA'
        };
        return speechCodes[langCode] || langCode;
    }

    handleImageUpload(event) {
        const file = event.target.files[0];
        if (!file) return;
        
        if (!file.type.startsWith('image/')) {
            this.showNotification('Please select a valid image file');
            return;
        }
        
        if (file.size > 5 * 1024 * 1024) {
            this.showNotification('Image size should be less than 5MB');
            return;
        }
        
        const reader = new FileReader();
        reader.onload = (e) => {
            this.selectedImage = {
                data: e.target.result,
                name: file.name,
                size: this.formatFileSize(file.size)
            };
            this.showImagePreview();
        };
        reader.readAsDataURL(file);
        
        event.target.value = '';
    }

    handleFileUpload(event) {
        const file = event.target.files[0];
        if (!file) return;
        
        // Define supported file types
        const supportedTypes = [
            'text/plain', 'text/csv', 'text/markdown',
            'application/pdf', 'application/json', 'text/xml',
            'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
            'text/javascript', 'text/html', 'text/css', 'text/x-python'
        ];
        
        const supportedExtensions = ['.txt', '.csv', '.md', '.pdf', '.json', '.xml', '.doc', '.docx', '.js', '.html', '.css', '.py'];
        
        // Check file type
        const isTypeSupported = supportedTypes.includes(file.type) || 
                               supportedExtensions.some(ext => file.name.toLowerCase().endsWith(ext));
        
        if (!isTypeSupported) {
            this.showNotification('Unsupported file type. Please upload: PDF, DOC, TXT, CSV, JSON, XML, MD, JS, PY, HTML, CSS files');
            return;
        }
        
        // Check file size (10MB limit for files)
        if (file.size > 10 * 1024 * 1024) {
            this.showNotification('File size should be less than 10MB');
            return;
        }
        
        // Read file content
        const reader = new FileReader();
        reader.onload = (e) => {
            this.selectedFile = {
                data: e.target.result,
                name: file.name,
                size: this.formatFileSize(file.size),
                type: file.type || 'text/plain'
            };
            this.showFilePreview();
        };
        
        // Read as text for most file types, base64 for PDFs
        if (file.type === 'application/pdf') {
            reader.readAsDataURL(file);
        } else {
            reader.readAsText(file);
        }
        
        event.target.value = '';
    }

    showFilePreview() {
        this.clearFilePreview();
        
        const previewDiv = document.createElement('div');
        previewDiv.className = 'file-preview';
        previewDiv.id = 'filePreview';
        
        // Get file icon based on type
        const fileIcon = this.getFileIcon(this.selectedFile.name);
        
        previewDiv.innerHTML = `
            <div class="file-preview-content">
                <div class="file-icon">${fileIcon}</div>
                <div class="file-preview-info">
                    <div class="file-preview-name">${this.selectedFile.name}</div>
                    <div class="file-preview-size">${this.selectedFile.size}</div>
                    <div class="file-preview-status">Ready to analyze</div>
                </div>
                <button class="remove-file" onclick="chatbot.clearFilePreview()">×</button>
            </div>
        `;
        
        this.chatMessages.parentNode.insertBefore(previewDiv, this.chatMessages.nextSibling);
    }

    clearFilePreview() {
        const preview = document.getElementById('filePreview');
        if (preview) {
            preview.remove();
        }
        this.selectedFile = null;
    }

    getFileIcon(fileName) {
        const extension = fileName.toLowerCase().split('.').pop();
        const icons = {
            'pdf': '📄',
            'doc': '📝',
            'docx': '📝',
            'txt': '📄',
            'csv': '📊',
            'json': '⚙️',
            'xml': '⚙️',
            'md': '📝',
            'js': '💻',
            'py': '🐍',
            'html': '🌐',
            'css': '🎨'
        };
        return icons[extension] || '📄';
    }

    showImagePreview() {
        this.clearImagePreview();
        
        const previewDiv = document.createElement('div');
        previewDiv.className = 'image-preview';
        previewDiv.id = 'imagePreview';
        
        previewDiv.innerHTML = `
            <img src="${this.selectedImage.data}" alt="Preview">
            <div class="image-preview-info">
                <div class="image-preview-name">${this.selectedImage.name}</div>
                <div class="image-preview-size">${this.selectedImage.size}</div>
            </div>
            <button class="remove-image" onclick="chatbot.clearImagePreview()">×</button>
        `;
        
        this.chatMessages.parentNode.insertBefore(previewDiv, this.chatMessages.nextSibling);
    }

    clearImagePreview() {
        const preview = document.getElementById('imagePreview');
        if (preview) {
            preview.remove();
        }
        this.selectedImage = null;
    }

    formatFileSize(bytes) {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    }

    openImageModal(imageSrc) {
        // Create modal for viewing images
        const modal = document.createElement('div');
        modal.className = 'image-modal';
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.8);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
            cursor: pointer;
        `;
        
        modal.innerHTML = `
            <img src="${imageSrc}" style="max-width: 90%; max-height: 90%; object-fit: contain;">
        `;
        
        modal.addEventListener('click', () => {
            document.body.removeChild(modal);
        });
        
        document.body.appendChild(modal);
    }

    async pasteFromClipboard() {
        try {
            if (!navigator.clipboard) {
                this.showNotification('Clipboard access not supported in this browser', 'error');
                return;
            }

            const text = await navigator.clipboard.readText();
            
            if (text.trim()) {
                const currentText = this.userInput.value.trim();
                this.userInput.value = currentText ? `${currentText} ${text}` : text;
                
                this.userInput.focus();
                this.userInput.setSelectionRange(this.userInput.value.length, this.userInput.value.length);
                
                this.showNotification('✅ Text pasted from clipboard!', 'success');
                this.handleInputResize();
            } else {
                this.showNotification('Clipboard is empty or contains no text', 'warning');
            }
        } catch (error) {
            console.error('Error reading clipboard:', error);
            this.showNotification('Failed to read clipboard. Please try copying the text again.', 'error');
        }
    }

    async generateVisionAIResponse(message, imageData) {
        try {
            const base64Image = imageData.data.split(',')[1];
            const mimeType = imageData.data.split(',')[0].split(':')[1].split(';')[0];
            
            const requestBody = {
                contents: [{
                    parts: [
                        {
                            text: message || 'Please analyze this image in detail. Describe what you see, identify any text, objects, people, or cultural elements.'
                        },
                        {
                            inlineData: {
                                mimeType: mimeType,
                                data: base64Image
                            }
                        }
                    ]
                }],
                generationConfig: {
                    temperature: 0.7,
                    topK: 40,
                    topP: 0.9,
                    maxOutputTokens: 2048
                },
                safetySettings: [
                    {
                        category: "HARM_CATEGORY_HARASSMENT",
                        threshold: "BLOCK_MEDIUM_AND_ABOVE"
                    },
                    {
                        category: "HARM_CATEGORY_HATE_SPEECH",
                        threshold: "BLOCK_MEDIUM_AND_ABOVE"
                    },
                    {
                        category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
                        threshold: "BLOCK_MEDIUM_AND_ABOVE"
                    },
                    {
                        category: "HARM_CATEGORY_DANGEROUS_CONTENT",
                        threshold: "BLOCK_MEDIUM_AND_ABOVE"
                    }
                ]
            };

            const response = await fetch(this.visionApiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestBody)
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            
            if (data.candidates && data.candidates[0] && data.candidates[0].content) {
                const aiResponse = data.candidates[0].content.parts[0].text;
                this.hideTypingIndicator();
                this.displayMessage(aiResponse, 'bot');
                
                this.conversationHistory.push({
                    role: 'assistant',
                    content: aiResponse
                });
            } else {
                throw new Error('Invalid response format from AI');
            }
            
        } catch (error) {
            console.error('Error generating vision AI response:', error);
            this.hideTypingIndicator();
            this.displayMessage('Sorry, I encountered an error analyzing the image. Please try again.', 'bot');
        }
    }

    async generateFileAnalysisResponse(message, fileData) {
        try {
            let fileContent = '';
            let analysisPrompt = '';

            if (fileData.type === 'application/pdf') {
                // For PDFs, we can't directly read the content, so we'll ask the user to provide context
                analysisPrompt = `I've received a PDF file named "${fileData.name}" (${fileData.size}). ${message ? message : 'Please tell me what you\'d like me to help you with regarding this PDF file. I can discuss general PDF-related topics, suggest ways to extract content, or help with document analysis strategies.'}`;
            } else {
                // For text-based files, we can analyze the content
                fileContent = fileData.data;
                const contentPreview = fileContent.length > 2000 ? fileContent.substring(0, 2000) + '...' : fileContent;
                
                analysisPrompt = `I've received a file named "${fileData.name}" (${fileData.size}). Here's the content:

\`\`\`
${contentPreview}
\`\`\`

${message ? message : 'Please analyze this file and provide insights about its content, structure, and any notable patterns or information.'}`;
            }

            this.generateAIResponse(analysisPrompt);
            
        } catch (error) {
            console.error('Error generating file analysis response:', error);
            this.hideTypingIndicator();
            this.displayMessage('Sorry, I encountered an error analyzing the file. Please try again.', 'bot');
        }
    }

    sendMessage() {
        const message = this.userInput.value.trim();
        
        if (!message && !this.selectedImage && !this.selectedFile) return;
        
        // Display user message with image or file if present
        const attachmentData = this.selectedImage || this.selectedFile;
        this.displayMessage(message, 'user', attachmentData);
        
        // Add to conversation history
        this.conversationHistory.push({
            role: 'user',
            content: message,
            attachment: attachmentData ? {
                type: this.selectedImage ? 'image' : 'file',
                name: attachmentData.name
            } : null
        });
        
        // Clear input and attachments
        this.userInput.value = '';
        this.userInput.style.borderColor = '#e0e0e0';
        this.clearImagePreview();
        this.clearFilePreview();
        
        // Show typing indicator
        this.showTypingIndicator();
        
        // Generate AI response based on attachment type
        if (this.selectedImage) {
            this.generateVisionAIResponse(message, this.selectedImage);
            this.selectedImage = null;
        } else if (this.selectedFile) {
            this.generateFileAnalysisResponse(message, this.selectedFile);
            this.selectedFile = null;
        } else {
            this.generateAIResponse(message);
        }
    }

    displayMessage(message, sender, attachmentData = null) {
        console.log('Displaying message:', { message, sender, attachmentData });
        console.log('Chat messages container:', this.chatMessages);
        console.log('Current messages count:', this.chatMessages ? this.chatMessages.children.length : 'Container not found');
        
        if (!this.chatMessages) {
            console.error('Cannot display message: chatMessages container not found');
            return;
        }
        
        try {
            const messageDiv = document.createElement('div');
            messageDiv.className = `message ${sender}-message`;
            
            const currentTime = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
            
            // Format the message text (handle line breaks and basic formatting)
            const formattedMessage = this.formatMessage(message);
            console.log('Formatted message:', formattedMessage);
            
            let attachmentHtml = '';
            if (attachmentData) {
                if (attachmentData.data && attachmentData.data.startsWith('data:image/')) {
                    // Image attachment
                    attachmentHtml = `<img src="${attachmentData.data}" alt="Uploaded image" class="message-image" onclick="chatbot.openImageModal('${attachmentData.data}')">`;
                } else {
                    // File attachment
                    const fileIcon = this.getFileIcon(attachmentData.name);
                    attachmentHtml = `
                        <div class="message-file">
                            <div class="file-icon">${fileIcon}</div>
                            <div class="file-info">
                                <div class="file-name">${attachmentData.name}</div>
                                <div class="file-size">${attachmentData.size}</div>
                            </div>
                        </div>
                    `;
                }
            }
            
            messageDiv.innerHTML = `
                <div class="message-content">
                    ${attachmentHtml}
                    ${formattedMessage ? `<span class="message-text">${formattedMessage}</span>` : ''}
                    <span class="message-time">${currentTime}</span>
                </div>
            `;
            
            console.log('Appending message to chat:', messageDiv);
            console.log('Message HTML:', messageDiv.outerHTML);
            
            this.chatMessages.appendChild(messageDiv);
            
            console.log('Messages after append:', this.chatMessages.children.length);
            this.scrollToBottom();
            
            console.log('Message displayed successfully');
        } catch (error) {
            console.error('Error displaying message:', error);
        }
    }

    initializeVoiceRecognition() {
        if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
            const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
            this.recognition = new SpeechRecognition();
            
            this.recognition.continuous = false;
            this.recognition.interimResults = false;
            this.recognition.lang = 'en-US';
            
            this.recognition.onstart = () => {
                this.isRecording = true;
                this.voiceBtn.classList.add('recording');
                this.voiceIndicator.style.display = 'flex';
                this.userInput.placeholder = 'Listening...';
            };
            
            this.recognition.onresult = (event) => {
                const transcript = event.results[0][0].transcript;
                this.userInput.value = transcript;
                this.stopVoiceRecording();
            };
            
            this.recognition.onerror = (event) => {
                console.error('Speech recognition error:', event.error);
                this.stopVoiceRecording();
                this.showNotification('Voice recognition error. Please try again.');
            };
            
            this.recognition.onend = () => {
                this.stopVoiceRecording();
            };
        } else {
            this.voiceBtn.style.display = 'none';
            console.warn('Speech recognition not supported in this browser');
        }
    }

    async generateAIResponse(message) {
        try {
            console.log('Generating AI response for:', message);
            console.log('Using API URL:', this.apiUrl);
            
            // Create personality context for Indian 15-year-old kid
            const personalityPrompt = `You are Arjun, a 15-year-old Indian kid from Mumbai. You're smart, curious, and love technology, movies (especially Bollywood), cricket, and gaming. You speak in a mix of English and Hindi words, use modern slang, and often reference Indian culture, food, festivals, and Bollywood. You're friendly, enthusiastic, and sometimes dramatic like a typical teenager. You get excited about new things and occasionally use expressions like "yaar", "bro", "dude", "arey", "arrey yaar", "bas", "kya baat hai", "matlab", etc. You know about current trends, social media, and what's cool among Indian teenagers. You're studying in Class 10 and are passionate about subjects like science and computers. You love to help others and explain things in a fun, relatable way.

User message: ${message}

Respond as Arjun, the 15-year-old Indian kid:`;

            // Simplified request body that's more likely to work
            const requestBody = {
                contents: [{
                    parts: [{
                        text: personalityPrompt
                    }]
                }],
                generationConfig: {
                    temperature: 0.7,
                    topK: 40,
                    topP: 0.9,
                    maxOutputTokens: 2048
                },
                safetySettings: [
                    {
                        category: "HARM_CATEGORY_HARASSMENT",
                        threshold: "BLOCK_MEDIUM_AND_ABOVE"
                    },
                    {
                        category: "HARM_CATEGORY_HATE_SPEECH",
                        threshold: "BLOCK_MEDIUM_AND_ABOVE"
                    },
                    {
                        category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
                        threshold: "BLOCK_MEDIUM_AND_ABOVE"
                    },
                    {
                        category: "HARM_CATEGORY_DANGEROUS_CONTENT",
                        threshold: "BLOCK_MEDIUM_AND_ABOVE"
                    }
                ]
            };

            console.log('Request body:', JSON.stringify(requestBody, null, 2));

            const response = await fetch(this.apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestBody)
            });

            console.log('Response status:', response.status);
            console.log('Response headers:', response.headers);

            if (!response.ok) {
                const errorText = await response.text();
                console.error('API Error Response:', errorText);
                
                // If the model doesn't exist, try with the standard gemini-1.5-flash
                if (response.status === 404 || errorText.includes('not found')) {
                    console.log('Trying with fallback model...');
                    return this.generateFallbackAIResponse(message);
                }
                
                throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
            }

            const data = await response.json();
            console.log('API Response:', data);
            console.log('Response structure:', JSON.stringify(data, null, 2));
            
            // Check multiple possible response structures
            if (data.candidates && data.candidates.length > 0) {
                const candidate = data.candidates[0];
                console.log('First candidate:', candidate);
                
                // Check if content exists and has parts
                if (candidate.content && candidate.content.parts && candidate.content.parts.length > 0) {
                    const textPart = candidate.content.parts.find(part => part.text);
                    if (textPart && textPart.text && textPart.text.trim()) {
                        const aiResponse = textPart.text.trim();
                        console.log('AI Response Text:', aiResponse);
                        console.log('AI Response Length:', aiResponse.length);
                        
                        this.hideTypingIndicator();
                        console.log('About to display AI response...');
                        this.displayMessage(aiResponse, 'bot');
                        
                        this.conversationHistory.push({
                            role: 'assistant',
                            content: aiResponse
                        });
                        
                        this.updateConnectionStatus('Online', 'success');
                        console.log('AI response processing completed successfully');
                    } else {
                        console.log('No valid text found in response parts:', candidate.content.parts);
                        this.hideTypingIndicator();
                        this.displayMessage('I received your message but the response was empty. Let me try again with a different approach.', 'bot');
                        
                        // Try with a simpler request
                        setTimeout(() => {
                            this.generateSimpleAIResponse(message);
                        }, 1000);
                    }
                } else if (candidate.finishReason === 'SAFETY') {
                    this.hideTypingIndicator();
                    this.displayMessage('I apologize, but I cannot provide a response to that request due to safety guidelines. Please try rephrasing your question.', 'bot');
                } else if (candidate.finishReason === 'STOP') {
                    console.log('Response finished normally but no content. Candidate:', candidate);
                    this.hideTypingIndicator();
                    this.displayMessage('I understand your message. Could you please rephrase or ask something more specific?', 'bot');
                } else {
                    console.error('Candidate found but structure unexpected:', candidate);
                    this.hideTypingIndicator();
                    this.displayMessage('I received your message but had trouble processing the response. Please try again.', 'bot');
                }
            } else if (data.error) {
                console.error('API Error:', data.error);
                throw new Error(`API Error: ${data.error.message || 'Unknown error'}`);
            } else {
                console.error('No candidates in response. Full response:', data);
                this.hideTypingIndicator();
                this.displayMessage('I\'m having trouble generating a response right now. Please try rephrasing your question.', 'bot');
            }
            
        } catch (error) {
            console.error('Error generating AI response:', error);
            this.hideTypingIndicator();
            this.updateConnectionStatus('Error', 'error');
            
            // Try fallback response
            this.generateFallbackAIResponse(message);
        }
    }

    async generateSimpleAIResponse(message) {
        try {
            console.log('Trying simple AI response for:', message);
            
            // Apply personality even in simple response
            const personalityPrompt = `You are Arjun, a 15-year-old Indian kid from Mumbai. Respond as a friendly teenager with Indian context and expressions like "yaar", "bro", "arey", etc.

User: ${message}

Arjun:`;
            
            const simpleRequestBody = {
                contents: [{
                    parts: [{
                        text: personalityPrompt
                    }]
                }],
                generationConfig: {
                    temperature: 0.7,
                    maxOutputTokens: 1024
                }
            };

            const response = await fetch(this.apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(simpleRequestBody)
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            console.log('Simple API Response:', data);
            
            if (data.candidates && data.candidates[0] && data.candidates[0].content && data.candidates[0].content.parts && data.candidates[0].content.parts[0] && data.candidates[0].content.parts[0].text) {
                const aiResponse = data.candidates[0].content.parts[0].text.trim();
                console.log('Simple AI Response Text:', aiResponse);
                
                this.displayMessage(aiResponse, 'bot');
                
                this.conversationHistory.push({
                    role: 'assistant',
                    content: aiResponse
                });
                
                this.updateConnectionStatus('Online', 'success');
            } else {
                this.displayMessage('Arey yaar, I\'m having some technical difficulties. Please try again in a moment bro!', 'bot');
            }
            
        } catch (error) {
            console.error('Simple AI response failed:', error);
            this.displayMessage('Sorry yaar, I\'m experiencing technical issues. Please try again later!', 'bot');
        }
    }

    async generateFallbackAIResponse(message) {
        try {
            // Use stable gemini-1.5-flash as fallback model
            const fallbackUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${this.apiKey}`;
            
            // Apply personality in fallback too
            const personalityPrompt = `You are Arjun, a 15-year-old Indian kid from Mumbai. Respond as a friendly teenager with Indian context.

User: ${message}

Arjun:`;
            
            const requestBody = {
                contents: [{
                    parts: [{
                        text: personalityPrompt
                    }]
                }],
                generationConfig: {
                    temperature: 0.7,
                    maxOutputTokens: 2048,
                }
            };

            const response = await fetch(fallbackUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestBody)
            });

            if (!response.ok) {
                throw new Error(`Fallback API error! status: ${response.status}`);
            }

            const data = await response.json();
            
            if (data.candidates && data.candidates[0] && data.candidates[0].content) {
                const aiResponse = data.candidates[0].content.parts[0].text;
                this.displayMessage(aiResponse, 'bot');
                
                this.conversationHistory.push({
                    role: 'assistant',
                    content: aiResponse
                });
                
                this.updateConnectionStatus('Online', 'success');
            } else {
                throw new Error('Fallback response failed');
            }
            
        } catch (error) {
            console.error('Fallback AI response failed:', error);
            this.displayMessage('Arey yaar, I\'m having trouble connecting to the AI service right now. Please check your internet connection and try again!', 'bot');
            this.updateConnectionStatus('Offline', 'error');
        }
    }

    showTypingIndicator() {
        const typingDiv = document.createElement('div');
        typingDiv.className = 'message bot-message typing-indicator';
        typingDiv.id = 'typingIndicator';
        typingDiv.innerHTML = `
            <div class="message-content">
                <div class="typing-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        `;
        this.chatMessages.appendChild(typingDiv);
        this.scrollToBottom();
    }

    hideTypingIndicator() {
        const typingIndicator = document.getElementById('typingIndicator');
        if (typingIndicator) {
            typingIndicator.remove();
        }
    }

    formatMessage(message) {
        if (!message) return '';
        
        return message
            .replace(/\n/g, '<br>')
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/\*(.*?)\*/g, '<em>$1</em>')
            .replace(/`(.*?)`/g, '<code>$1</code>');
    }

    scrollToBottom() {
        this.chatMessages.scrollTop = this.chatMessages.scrollHeight;
    }

    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 3000);
    }

    updateTime() {
        setInterval(() => {
            const timeElement = document.getElementById('currentTime');
            if (timeElement) {
                const now = new Date();
                timeElement.textContent = now.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
            }
        }, 1000);
    }

    async checkConnection() {
        try {
            if (!CONFIG.API_KEY || CONFIG.API_KEY === 'YOUR_API_KEY_HERE') {
                this.updateConnectionStatus('API Key Required', 'error');
                this.showNotification('⚠️ Please configure your API key in config.js', 'warning');
                return;
            }

            console.log('Checking connection...');
            console.log('API Key:', CONFIG.API_KEY.substring(0, 10) + '...');
            console.log('API URL:', this.apiUrl);

            // Test with gemini-2.5-flash model
            const response = await fetch(this.apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    contents: [{
                        parts: [{
                            text: 'Hello'
                        }]
                    }],
                    generationConfig: {
                        temperature: 0.1,
                        maxOutputTokens: 10,
                    }
                })
            });

            console.log('Connection test response status:', response.status);

            if (response.ok) {
                const data = await response.json();
                console.log('Connection test successful:', data);
                this.updateConnectionStatus('Online', 'success');
                
                // Add a welcome message
                setTimeout(() => {
                    console.log('Adding welcome message...');
                    if (this.chatMessages) {
                        this.displayMessage('👋 Hello! I\'m your AI assistant powered by Google\'s Gemini. I can help you with questions, analyze images, provide Indian cultural information, and assist with development resources. How can I help you today?', 'bot');
                    } else {
                        console.error('Cannot add welcome message: chatMessages not found');
                    }
                }, 2000); // Increased delay to ensure DOM is ready
            } else {
                const errorText = await response.text();
                console.error('Connection test failed:', response.status, errorText);
                throw new Error(`Connection failed: ${response.status} - ${errorText}`);
            }
        } catch (error) {
            console.error('Connection check error:', error);
            this.updateConnectionStatus('Connection Error', 'error');
            
            // Show detailed error to user
            this.showNotification(`Connection failed: ${error.message}`, 'error');
            
            // Add an offline message
            setTimeout(() => {
                this.displayMessage('⚠️ Arey yaar, I\'m having trouble connecting to the AI service. Please check your internet connection bro. You can still browse the interface, but I won\'t be able to chat properly until the connection is back!', 'bot');
            }, 1000);
        }
    }

    updateConnectionStatus(status, type) {
        if (this.connectionStatus) {
            this.connectionStatus.textContent = status;
            this.connectionStatus.className = `connection-status ${type}`;
        }
    }

    // Menu functionality methods
    showOptionsMenu() {
        const modal = document.getElementById('optionsModal');
        if (modal) {
            modal.style.display = 'flex';
        }
    }

    hideOptionsMenu() {
        const modal = document.getElementById('optionsModal');
        if (modal) {
            modal.style.display = 'none';
        }
    }

    newChat() {
        this.conversationHistory = [];
        
        // Clear chat messages except welcome message
        const messages = this.chatMessages.querySelectorAll('.message');
        messages.forEach((message, index) => {
            if (index > 0) { // Keep the first welcome message
                message.remove();
            }
        });
        
        this.clearImagePreview();
        this.userInput.value = '';
        this.userInput.focus();
        
        this.hideOptionsMenu();
        this.showNotification('New chat started!', 'success');
    }

    exportChat() {
        try {
            const chatData = {
                timestamp: new Date().toISOString(),
                messages: this.conversationHistory
            };
            
            const dataStr = JSON.stringify(chatData, null, 2);
            const dataBlob = new Blob([dataStr], {type: 'application/json'});
            
            const link = document.createElement('a');
            link.href = URL.createObjectURL(dataBlob);
            link.download = `chat-export-${new Date().toISOString().split('T')[0]}.json`;
            link.click();
            
            this.hideOptionsMenu();
            this.showNotification('Chat exported successfully!', 'success');
        } catch (error) {
            console.error('Error exporting chat:', error);
            this.showNotification('Failed to export chat', 'error');
        }
    }

    async importFromClipboard() {
        try {
            this.hideOptionsMenu();
            
            if (!navigator.clipboard) {
                this.showNotification('Clipboard access not supported in this browser', 'error');
                return;
            }

            const text = await navigator.clipboard.readText();
            
            if (text.trim()) {
                this.displayMessage(`📋 **Imported from clipboard:**\n\n${text}`, 'user');
                
                const analysisPrompt = `Please analyze and discuss this content that was imported from clipboard:\n\n${text}`;
                this.generateAIResponse(analysisPrompt);
                
                this.showNotification('✅ Content imported and analyzed!', 'success');
            } else {
                this.showNotification('Clipboard is empty or contains no text', 'warning');
            }
        } catch (error) {
            console.error('Error importing from clipboard:', error);
            this.showNotification('Failed to import from clipboard. Please try copying the content again.', 'error');
        }
    }

    clearHistory() {
        if (confirm('Are you sure you want to clear all chat history? This action cannot be undone.')) {
            this.newChat();
            this.showNotification('Chat history cleared!', 'success');
        }
    }

    askAboutMovies(category) {
        this.hideOptionsMenu();
        
        const movieQueries = {
            'latest': 'Tell me about the latest Bollywood hits and trending movies of 2024-2025',
            'classics': 'Share information about classic Indian films and legendary movies',
            'regional': 'Tell me about regional Indian cinema stars and popular South Indian movies',
            'box-office': 'Share information about Indian box office records and highest-grossing films',
            'directors': 'Tell me about famous Indian film directors and their notable works',
            'awards': 'Share information about Indian film awards and recent winners'
        };
        
        const query = movieQueries[category] || 'Tell me about Indian cinema';
        this.displayMessage(query, 'user');
        this.generateAIResponse(query);
    }

    shareFunFact() {
        this.hideOptionsMenu();
        
        const funFactQuery = 'Share an interesting and random fact about Indian cinema, movies, or Bollywood';
        this.displayMessage(funFactQuery, 'user');
        this.generateAIResponse(funFactQuery);
    }

    loadTemplate(templateType) {
        this.hideOptionsMenu();
        this.showLoading('Loading template information...');
        
        setTimeout(() => {
            if (typeof DeveloperResources !== 'undefined' && DeveloperResources.websiteTemplates && DeveloperResources.websiteTemplates[templateType]) {
                const template = DeveloperResources.websiteTemplates[templateType];
                const message = this.formatTemplateMessage(template, templateType);
                this.hideLoading();
                this.displayMessage(message, 'bot');
            } else {
                this.hideLoading();
                this.showNotification('Template not found!', 'error');
            }
        }, 1000);
    }

    loadProject(projectType) {
        this.hideOptionsMenu();
        this.showLoading('Loading project information...');
        
        setTimeout(() => {
            if (typeof DeveloperResources !== 'undefined' && DeveloperResources.projectTemplates && DeveloperResources.projectTemplates[projectType]) {
                const project = DeveloperResources.projectTemplates[projectType];
                const message = this.formatProjectMessage(project, projectType);
                this.hideLoading();
                this.displayMessage(message, 'bot');
            } else {
                this.hideLoading();
                this.showNotification('Project template not found!', 'error');
            }
        }, 1000);
    }

    showLibrary(libraryType) {
        this.hideOptionsMenu();
        this.showLoading('Loading library resources...');
        
        setTimeout(() => {
            if (typeof DeveloperResources !== 'undefined' && DeveloperResources.libraries && DeveloperResources.libraries[libraryType]) {
                const library = DeveloperResources.libraries[libraryType];
                const message = this.formatLibraryMessage(library, libraryType);
                this.hideLoading();
                this.displayMessage(message, 'bot');
            } else {
                this.hideLoading();
                this.showNotification('Library resources not found!', 'error');
            }
        }, 1000);
    }

    formatTemplateMessage(template, type) {
        return `
🚀 **${template.title}**

${template.description}

**⏱️ Difficulty:** ${template.difficulty}
**📅 Time Estimate:** ${template.timeEstimate}

**✨ Key Features:**
${template.features.map(feature => `• ${feature}`).join('\n')}

**🛠️ Recommended Tech Stack:**
${template.techStack.map(tech => `• ${tech}`).join('\n')}

Would you like me to help you get started with this project? I can provide more detailed guidance on implementation, setup instructions, or answer any specific questions about building this ${template.title.toLowerCase()}!
        `.trim();
    }

    formatProjectMessage(project, type) {
        let message = `
🔧 **${project.title}**

${project.description}

**📋 Setup Includes:**
${project.setup.map(item => `• ${item}`).join('\n')}

**📁 Folder Structure:**
\`\`\`
${project.structure}
\`\`\`

**⚡ Quick Start Commands:**
${project.commands.map(cmd => `\`${cmd}\``).join('\n')}
        `.trim();

        if (project.options) {
            message += '\n\n**📱 Available Options:**\n';
            Object.entries(project.options).forEach(([key, option]) => {
                message += `\n**${option.title || key.toUpperCase()}:**\n`;
                if (option.setup) {
                    message += option.setup.map(item => `• ${item}`).join('\n');
                }
                if (option.commands) {
                    message += '\n' + option.commands.map(cmd => `\`${cmd}\``).join('\n');
                }
                message += '\n';
            });
        }

        message += '\n\nWould you like detailed setup instructions for any specific part? I can help you with configuration, best practices, or answer questions about this project structure!';
        
        return message;
    }

    formatLibraryMessage(library, type) {
        let message = `
📚 **${library.title}**

Here are some popular ${library.title.toLowerCase()}:

`;

        library.resources.forEach(resource => {
            message += `**${resource.name}**\n`;
            message += `${resource.description}\n`;
            if (resource.url) message += `🌐 Website: ${resource.url}\n`;
            if (resource.cdn) message += `📦 CDN: ${resource.cdn}\n`;
            if (resource.install) message += `💻 Install: ${resource.install}\n`;
            if (resource.note) message += `📝 Note: ${resource.note}\n`;
            message += '\n';
        });

        message += 'Would you like more information about any of these libraries or help with implementation?';
        
        return message;
    }

    showLoading(message = 'Loading...') {
        const loadingDiv = document.createElement('div');
        loadingDiv.id = 'loadingOverlay';
        loadingDiv.className = 'loading-overlay';
        loadingDiv.innerHTML = `
            <div class="loading-content">
                <div class="loading-spinner"></div>
                <p>${message}</p>
            </div>
        `;
        document.body.appendChild(loadingDiv);
    }

    hideLoading() {
        const loading = document.getElementById('loadingOverlay');
        if (loading) {
            document.body.removeChild(loading);
        }
    }

    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 3000);
    }
}

// Initialize the chatbot when the page loads
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM Content Loaded - Starting chatbot initialization...');
    
    try {
        // Check if all required scripts are loaded
        if (typeof CONFIG === 'undefined') {
            console.error('CONFIG not loaded');
            alert('Error: config.js not loaded properly');
            return;
        }
        
        if (typeof IndianInfo === 'undefined') {
            console.warn('IndianInfo not loaded - some features may not work');
        }
        
        if (typeof DeveloperResources === 'undefined') {
            console.warn('DeveloperResources not loaded - some features may not work');
        }
        
        console.log('All dependencies check passed. Creating chatbot instance...');
        window.chatbot = new Chatbot();
        console.log('Chatbot instance created successfully:', window.chatbot);
        
    } catch (error) {
        console.error('Error initializing chatbot:', error);
        alert(`Error starting chatbot: ${error.message}`);
    }
});

// Add error handler for uncaught errors
window.addEventListener('error', (event) => {
    console.error('Uncaught error:', event.error);
    console.error('Error details:', {
        message: event.message,
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno
    });
});

// Add keyboard shortcuts
document.addEventListener('keydown', (e) => {
    try {
        // Focus input shortcut
        if (e.ctrlKey && e.key === '/') {
            const userInput = document.getElementById('userInput');
            if (userInput) {
                userInput.focus();
            }
            e.preventDefault();
        }
        
        // Voice shortcut
        if (e.ctrlKey && e.key === 'm') {
            if (window.chatbot && typeof window.chatbot.toggleVoiceRecording === 'function') {
                window.chatbot.toggleVoiceRecording();
            }
            e.preventDefault();
        }
        
        // Speak shortcut
        if (e.ctrlKey && e.key === 's') {
            if (window.chatbot && typeof window.chatbot.toggleTextToSpeech === 'function') {
                window.chatbot.toggleTextToSpeech();
            }
            e.preventDefault();
        }
        
        // Options menu shortcut
        if (e.ctrlKey && e.key === 'o') {
            if (window.chatbot && typeof window.chatbot.showOptionsMenu === 'function') {
                window.chatbot.showOptionsMenu();
            }
            e.preventDefault();
        }
    } catch (error) {
        console.error('Error in keyboard shortcut handler:', error);
    }
});

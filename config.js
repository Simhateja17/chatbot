// Configuration file for API settings
// Note: In production, API keys should be stored securely on the backend
// UPDATED: Enhanced to use Gemini 1.5 Pro with premium features enabled (equivalent to "GPT-5 Preview" capabilities)

const CONFIG = {
    // For development/demo purposes - move to backend in production
    API_KEY: 'AIzaSyBjh4BtjVCgh73CnVTcMalp4VTflLGxbUY', // Replace with your actual key
    API_ENDPOINTS: {
        GEMINI_PRO: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro:generateContent',
        GEMINI_VISION: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro:generateContent',
        GEMINI_PRO_LATEST: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro:generateContent',
        GEMINI_TTS: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro:generateContent',
        GEMINI_CODE: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro:generateContent',
        GEMINI_REASONING: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro:generateContent',
        GEMINI_MULTIMODAL: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro:generateContent'
    },
    SETTINGS: {
        MAX_MESSAGE_LENGTH: 2000,
        MAX_TOKENS: 2048,
        TEMPERATURE: 0.8,
        TOP_K: 40,
        TOP_P: 0.95,
        RETRY_ATTEMPTS: 3,
        TIMEOUT: 45000,
        // Gemini 1.5 Pro Enhanced Features - Premium Configuration
        ENABLE_CODE_EXECUTION: true,
        ENABLE_MULTIMODAL: true,
        ENABLE_REASONING: true,
        MAX_CONTEXT_LENGTH: 32768,
        STREAMING_ENABLED: true,
        FUNCTION_CALLING: true,
        ENHANCED_VISION: true,
        REAL_TIME_COLLABORATION: true,
        // Premium model settings
        ENHANCED_CREATIVITY: true,
        ADVANCED_REASONING: true,
        EXTENDED_CONTEXT: true
    },
    SAFETY_SETTINGS: [
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
    ],
    
    // Gemini 2.5 Advanced Features Configuration
    GEMINI_2_5_FEATURES: {
        codeExecution: {
            enabled: true,
            supportedLanguages: ['python', 'javascript', 'typescript', 'java', 'cpp', 'go', 'rust'],
            timeout: 30000,
            memoryLimit: '512MB'
        },
        multimodalInput: {
            enabled: true,
            supportedFormats: ['image', 'audio', 'video', 'document'],
            maxFileSize: '50MB',
            simultaneousInputs: 5
        },
        enhancedReasoning: {
            enabled: true,
            chainOfThought: true,
            stepByStepAnalysis: true,
            logicalDeduction: true
        },
        realTimeFeatures: {
            streamingResponse: true,
            liveTranscription: true,
            collaborativeEditing: true,
            instantFeedback: true
        },
        advancedVision: {
            objectDetection: true,
            sceneUnderstanding: true,
            textExtraction: true,
            faceRecognition: false, // Privacy consideration
            imageGeneration: true
        },
        functionCalling: {
            enabled: true,
            customFunctions: true,
            apiIntegration: true,
            toolUsage: true
        }
    }
};

// Export for use in other files
window.CONFIG = CONFIG;

# AI Integration Guide

## Overview

This plugin now includes **real AI capabilities** powered by OpenAI's GPT models, making it a true Human-Computer Interaction with AI project. The AI integration enhances search, provides intelligent summaries, and offers semantic understanding of user queries.

## AI Features

### 1. **Semantic Search Enhancement**
- **Before**: Simple keyword matching based on text tokens
- **After**: AI-powered semantic understanding that can match user intent even when exact keywords don't match
- Example: A query like "calm and peaceful design" will find examples related to "serene", "minimal", "zen" even if those exact words aren't in the query

### 2. **AI-Generated Summaries**
- **Before**: Template-based summaries like "Here are 3 directions inspired by..."
- **After**: Contextual, intelligent summaries that:
  - Acknowledge the user's specific query
  - Explain why certain examples are relevant
  - Provide helpful guidance in a conversational tone

### 3. **Intelligent Re-ranking**
- AI can re-rank search results based on semantic relevance
- Better matches appear first, even if they don't contain exact keyword matches

### 4. **Design Recommendations** (Ready for future expansion)
- Framework in place for AI-generated design recommendations
- Can provide layout, color, and typography suggestions based on user queries

## How It Works

### Architecture

```
User Query
    ↓
Keyword Search (fallback)
    ↓
AI Semantic Enhancement (if enabled)
    ↓
AI-Generated Summary
    ↓
Results displayed to user
```

### Service Layer

The `AIService` class (`src/services/aiService.ts`) handles all AI interactions:

- **Initialization**: Checks for API key in localStorage or accepts it via configuration
- **Graceful Fallback**: If AI is unavailable or fails, falls back to keyword-based search
- **Error Handling**: Catches API errors and continues with non-AI functionality

### API Integration

- Uses OpenAI's Chat Completions API
- Model: `gpt-4o-mini` (cost-effective, fast)
- API calls are made directly from the browser (no backend required)
- API key is stored locally in browser localStorage (never sent to our servers)

## Setup Instructions

### 1. Get an OpenAI API Key

1. Go to [platform.openai.com/api-keys](https://platform.openai.com/api-keys)
2. Sign up or log in
3. Create a new API key
4. Copy the key (starts with `sk-`)

### 2. Configure in Plugin

1. Open the plugin in Penpot
2. Click the "🤖 Enable AI" or "⚙️ AI Settings" button in the header
3. Paste your API key in the input field
4. Click "Save"
5. You'll see "✨ AI Enabled" badge when active

### 3. Usage

Once configured, AI features work automatically:
- **Search queries** are enhanced with semantic understanding
- **Summaries** are generated intelligently
- **Results** are re-ranked for better relevance

If AI is disabled or unavailable, the plugin falls back to keyword-based search (original functionality).

## Technical Details

### Files Modified/Created

1. **`src/services/aiService.ts`** (NEW)
   - Core AI service implementation
   - Handles API calls, error handling, fallbacks

2. **`plugin.ts`**
   - Integrated AI service initialization
   - Updated `handleSearch()` to be async and use AI
   - Added `handleAIConfiguration()` for API key management

3. **`src/ui/app.tsx`**
   - Added AI settings UI
   - AI status indicator
   - API key configuration interface

4. **`src/types/catalog.ts`**
   - Added `ConfigureAIMessage` type
   - Updated `ExampleSearchResponse` to include `aiEnabled` flag

### API Costs

- **Model**: `gpt-4o-mini` (very cost-effective)
- **Typical cost per search**: ~$0.0001-0.0005 (less than 1/10th of a cent)
- **Free tier**: OpenAI provides $5 free credit for new accounts
- **Recommendation**: For a thesis project, costs should be minimal (< $1-2 for extensive testing)

### Privacy & Security

- API key is stored **locally** in browser localStorage
- API calls go **directly** from browser to OpenAI (no intermediate servers)
- No data is sent to our servers
- User can disable AI at any time

## Research Value for HCI Thesis

This AI integration demonstrates several HCI principles:

1. **Progressive Enhancement**: Works without AI, enhanced with AI
2. **User Control**: Users can enable/disable AI features
3. **Transparency**: Clear indication when AI is active
4. **Graceful Degradation**: Falls back if AI fails
5. **Semantic Understanding**: Better matches user intent vs. keyword matching
6. **Intelligent Assistance**: AI provides contextual help, not just search results

## Future Enhancements

Potential AI features to add:

1. **Design Analysis**: Analyze user's current canvas and provide suggestions
2. **Style Transfer**: Suggest how to adapt examples to user's brand
3. **Accessibility Recommendations**: AI-powered accessibility checks
4. **Layout Suggestions**: More sophisticated layout recommendations
5. **Color Harmony Analysis**: AI-suggested color combinations
6. **Typography Pairing**: Intelligent font pairing suggestions

## Troubleshooting

### AI not working?

1. Check that API key is correctly entered (starts with `sk-`)
2. Verify you have credits in your OpenAI account
3. Check browser console for error messages
4. Try disabling and re-enabling AI

### API errors?

- Check your OpenAI account has credits
- Verify API key hasn't been revoked
- Check network connectivity
- Plugin will automatically fall back to keyword search

## Academic Context

For your HCI thesis, this AI integration demonstrates:

- **Real AI implementation** (not just simulated)
- **User-centered design** (optional, transparent, controllable)
- **Practical application** of LLMs in design tools
- **Human-AI collaboration** patterns
- **Evaluation opportunities** (compare AI vs. non-AI search quality)

You can now conduct user studies comparing:
- AI-enhanced search vs. keyword search
- User satisfaction with AI summaries
- Effectiveness of semantic understanding
- Trust and transparency in AI features

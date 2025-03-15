import React, { useState } from "react";
import axios from "axios";

const Home = () => {
  const [emailContent, setEmailContent] = useState("");
  const [tone, setTone] = useState("");
  const [loading, setLoading] = useState(false);
  const [generatedReply, setGeneratedReply] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await axios.post(
        "https://mailgenius.onrender.com/api/email/generate",
        { emailContent, tone }
      );
      setGeneratedReply(
        typeof response.data === "string"
          ? response.data
          : JSON.stringify(response.data)
      );
    } catch (error) {
      setError("Failed to generate reply");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <main className="container mx-auto px-4 py-8 max-w-3xl">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          Smart Email Reply Generator
        </h1>

        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <div className="space-y-6">
            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                Email Content
              </label>
              <textarea
                value={emailContent}
                onChange={(e) => setEmailContent(e.target.value)}
                rows="4"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                placeholder="Paste the email content you want to reply to..."
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                Select Tone (Optional)
              </label>
              <select
                value={tone}
                onChange={(e) => setTone(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              >
                <option value="">Choose a tone...</option>
                <option value="formal">Formal</option>
                <option value="Concise">Concise</option>
                <option value="Friendly">Friendly</option>
                <option value="Professional">Professional</option>
                <option value="Patience">Patience</option>
              </select>
            </div>

            <button
              onClick={handleSubmit}
              disabled={!emailContent || loading}
              className={`w-full py-3 px-6 rounded-lg text-white font-semibold transition-all ${
                !emailContent || loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700 hover:shadow-md"
              }`}
            >
              {loading ? (
                <div className="flex items-center justify-center">
                  <svg
                    className="animate-spin h-5 w-5 mr-3 text-white"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Generating...
                </div>
              ) : (
                "Generate Reply"
              )}
            </button>
          </div>

          {error && (
            <p className="text-red-500 mt-4 text-center font-medium">{error}</p>
          )}
        </div>

        {generatedReply && (
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Generated Reply
            </h2>
            <textarea
              readOnly
              value={generatedReply}
              rows="8"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-gray-50 mb-4 font-mono outline-none"
            />
            <button
              onClick={() => navigator.clipboard.writeText(generatedReply)}
              className="w-full py-2 px-4 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-medium"
            >
              Copy to Clipboard
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default Home;

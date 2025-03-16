import React, { useState } from "react";
import axios from "axios";
import { saveAs } from 'file-saver';

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

  const resetForm = () => {
    setEmailContent("");
    setTone("");
    setGeneratedReply("");
    setError("");
  };

  const handleDownload = () => {
    fetch(`${process.env.PUBLIC_URL}/mailGenius.zip`)
      .then((response) => response.blob())
      .then((blob) => {
        saveAs(blob, "mailGenius.zip");
      });
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
              <div className="mt-4 cursor-pointer" onClick={handleDownload}>
                <a
                  onClick={handleDownload} // Replace with your actual ZIP file URL
                  download
                  className="inline-block w-full py-2 px-4 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors font-medium text-center"
                >
                  Use it as a extension
                </a>
              </div>
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
          <div className="bg-white rounded-xl shadow-lg p-6 animate-fade-in">
            <div className="text-center mb-6">
              <div className="inline-block bg-green-100 rounded-full p-3">
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </div>
              <h2 className="text-2xl font-semibold text-gray-800 mt-4">
                Reply Generated Successfully!
              </h2>
              <p className="text-gray-600 mt-2">
                Ready to craft another perfect response?
              </p>
            </div>

            <textarea
              readOnly
              value={generatedReply}
              rows="8"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-gray-50 mb-4 font-mono outline-none"
            />

            <div className="flex gap-4">
              <button
                onClick={() => navigator.clipboard.writeText(generatedReply)}
                className="flex-1 py-2 px-4 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-medium flex items-center justify-center gap-2"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                  ></path>
                </svg>
                Copy to Clipboard
              </button>
              <button
                onClick={resetForm}
                className="flex-1 py-2 px-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium flex items-center justify-center gap-2"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  ></path>
                </svg>
                Create New Reply
              </button>
            </div>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-500">
                Modified something?{" "}
                <button
                  onClick={handleSubmit}
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  Regenerate this reply
                </button>
              </p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Home;

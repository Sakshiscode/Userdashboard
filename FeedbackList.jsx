import { RefreshCw } from "lucide-react";

export default function FeedbackList({ feedbacks, generateAISummary, processingId }) {
  return (
    <div>
      {feedbacks.map((feedback) => (
        <div key={feedback.id}>
          <button
            onClick={() => generateAISummary(feedback)}
            disabled={processingId === feedback.id}
            className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 disabled:opacity-50 flex items-center gap-2"
          >
            {processingId === feedback.id ? (
              <>
                <RefreshCw size={16} className="animate-spin" />
                Analyzing with Gemini...
              </>
            ) : (
              "Generate AI Analysis"
            )}
          </button>
        </div>
      ))}
    </div>
  );
}

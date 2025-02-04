import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Plus, X } from "lucide-react";

interface KeywordSectionProps {
  keywords: string[];
  setKeywords: (keywords: string[]) => void;
}

const KeywordSection = ({ keywords, setKeywords }: KeywordSectionProps) => {
  const [newKeyword, setNewKeyword] = useState("");

  const handleAddKeyword = () => {
    if (newKeyword.trim() && !keywords.includes(newKeyword.trim())) {
      setKeywords(prev => [...prev, newKeyword.trim()]);
      setNewKeyword("");
    }
  };

  const handleRemoveKeyword = (keywordToRemove: string) => {
    setKeywords(prev => prev.filter(keyword => keyword !== keywordToRemove));
  };

  return (
    <Card className="w-full p-8 bg-black/[0.96] relative mt-8 animate-fade-up">
      <h2 className="text-2xl font-semibold text-neutral-50 mb-6">Target Keywords (Optional)</h2>
      <p className="text-neutral-400 mb-6">
        What search terms would you like your business to rank for? For example: "construction company lincoln" or "house extensions grantham"
      </p>

      <div className="space-y-4">
        <div className="flex gap-2">
          <Input
            placeholder="Enter keyword or phrase..."
            value={newKeyword}
            onChange={(e) => setNewKeyword(e.target.value)}
            className="bg-neutral-900 border-neutral-800 text-neutral-100"
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                handleAddKeyword();
              }
            }}
          />
          <Button 
            onClick={handleAddKeyword}
            variant="secondary"
            className="bg-neutral-800 text-white hover:bg-neutral-700"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add Keyword
          </Button>
        </div>

        {keywords.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {keywords.map((keyword) => (
              <div
                key={keyword}
                className="flex items-center gap-2 bg-neutral-800 text-neutral-100 px-3 py-1 rounded-full"
              >
                <span>{keyword}</span>
                <button
                  onClick={() => handleRemoveKeyword(keyword)}
                  className="text-neutral-400 hover:text-neutral-200"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </Card>
  );
};

export default KeywordSection;
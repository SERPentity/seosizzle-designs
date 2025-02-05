import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { X } from "lucide-react";
import { useState } from "react";

interface ImageUploadSectionProps {
  onImagesChange: (images: { file: File; preview: string }[]) => void;
}

const ImageUploadSection = ({ onImagesChange }: ImageUploadSectionProps) => {
  const [uploadedImages, setUploadedImages] = useState<{ file: File; preview: string }[]>([]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const newImages = Array.from(files).map(file => ({
        file,
        preview: URL.createObjectURL(file)
      }));
      const updatedImages = [...uploadedImages, ...newImages];
      setUploadedImages(updatedImages);
      onImagesChange(updatedImages);
    }
  };

  const removeImage = (index: number) => {
    setUploadedImages(prev => {
      const newImages = [...prev];
      URL.revokeObjectURL(newImages[index].preview);
      newImages.splice(index, 1);
      onImagesChange(newImages);
      return newImages;
    });
  };

  return (
    <div className="ml-6 space-y-4">
      <Label htmlFor="image-upload" className="text-neutral-50 block mb-2">
        {uploadedImages.length > 0 ? 'Upload more images' : 'Choose an image'}
      </Label>
      <Input
        id="image-upload"
        type="file"
        accept="image/*"
        multiple
        onChange={handleImageUpload}
        className="bg-neutral-900 border-neutral-800 text-neutral-100 file:text-neutral-100 file:bg-neutral-800 file:border-0 file:px-4 file:py-2 file:mr-4 file:hover:bg-neutral-700 file:cursor-pointer file:transition-colors"
      />
      {uploadedImages.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-2">
          {uploadedImages.map((image, index) => (
            <div key={index} className="relative group">
              <img
                src={image.preview}
                alt={`Upload ${index + 1}`}
                className="w-16 h-16 object-cover rounded"
              />
              <button
                onClick={() => removeImage(index)}
                className="absolute -top-2 -right-2 bg-red-500 rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <X className="w-3 h-3 text-white" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageUploadSection;
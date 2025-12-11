import { Upload, X } from "lucide-react";

/**
 * 
 <ImageUpload
  onChange={handleImageChange}
  preview={imagePreview}
  onRemove={handleRemoveImage}
  label="Upload Image"
  id="unique-id"
/>
 */

const ImageUpload = ({
  onChange,
  preview,
  onRemove,
  label = "Upload Image",
  id = "image-upload",
  accept = "image/*",
}) => {
  return (
    <div>
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {label}
        </label>
      )}

      <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 hover:border-green-400 transition">
        <input
          type="file"
          accept={accept}
          onChange={onChange}
          className="hidden"
          id={id}
        />

        {!preview ? (
          <label
            htmlFor={id}
            className="flex flex-col items-center cursor-pointer"
          >
            <Upload className="w-12 h-12 text-gray-400 mb-2" />
            <span className="text-sm text-gray-600">Click to upload image</span>
            <span className="text-xs text-gray-400 mt-1">
              PNG, JPG, GIF up to 10MB
            </span>
          </label>
        ) : (
          <div className="relative">
            <img
              src={preview}
              alt="Preview"
              className="w-full h-48 object-cover rounded-lg"
            />
            <button
              type="button"
              onClick={onRemove}
              className="absolute top-2 right-2 bg-red-500 text-white p-1.5 rounded-full hover:bg-red-600 transition"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageUpload;

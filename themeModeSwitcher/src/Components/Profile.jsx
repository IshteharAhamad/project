import { useState, useRef } from "react";
import { FiUploadCloud } from "react-icons/fi";
import { BiErrorCircle } from "react-icons/bi";

const ProfilePictureUpdate = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("https://images.unsplash.com/photo-1633332755192-727a05c4013d");
  const [error, setError] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef(null);

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (file.size > 5000000) {
        setError("File size should be less than 5MB");
        return;
      }

      if (!file.type.startsWith("image/")) {
        setError("Please select an image file");
        return;
      }

      setError("");
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async () => {
    if (!selectedFile) {
      setError("Please select an image");
      return;
    }

    setIsUploading(true);
    try {
      // Simulating API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("Image uploaded successfully:", selectedFile);
      setError("");
    } catch (err) {
      setError("Failed to upload image. Please try again.");
    }
    setIsUploading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full space-y-8 bg-white p-6 rounded-xl shadow-lg">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Update Profile Picture</h2>
          <p className="mt-2 text-sm text-gray-600">Choose a new profile picture to update your account</p>
        </div>

        <div className="mt-8 space-y-6">
          <div className="flex flex-col items-center justify-center">
            <div className="relative group">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-gray-200 hover:border-blue-500 transition-all duration-300">
                <img
                  src={previewUrl}
                  alt="Profile Preview"
                  className="w-full h-full object-cover"
                />
              </div>
              <button
                onClick={() => fileInputRef.current.click()}
                className="absolute bottom-0 right-0 bg-blue-500 p-2 rounded-full text-white hover:bg-blue-600 transition-colors duration-300"
                aria-label="Choose profile picture"
              >
                <FiUploadCloud className="w-5 h-5" />
              </button>
            </div>

            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileSelect}
              accept="image/*"
              className="hidden"
              aria-label="File input"
            />
          </div>

          {error && (
            <div className="flex items-center justify-center space-x-2 text-red-500">
              <BiErrorCircle className="w-5 h-5" />
              <span className="text-sm">{error}</span>
            </div>
          )}

          <button
            onClick={handleSubmit}
            disabled={isUploading}
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-blue-300 disabled:cursor-not-allowed transition-colors duration-300"
            aria-label="Save profile picture"
          >
            {isUploading ? "Uploading..." : "Save Changes"}
          </button>
        </div>

        <div className="mt-4">
          <p className="text-xs text-gray-500 text-center">
            Supported formats: JPG, PNG, GIF (Max size: 5MB)
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePictureUpdate;
/**
 * 
 * import { useState, useRef } from "react";
import { FaUpload, FaCheck, FaTimes } from "react-icons/fa";

const ProfilePictureUpdate = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("https://images.unsplash.com/photo-1633332755192-727a05c4013d");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const fileInputRef = useRef(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (file.type.startsWith("image/")) {
        setError("");
        setSelectedImage(file);
        const reader = new FileReader();
        reader.onloadend = () => {
          setPreviewUrl(reader.result);
        };
        reader.readAsDataURL(file);
      } else {
        setError("Please select a valid image file");
        event.target.value = null;
      }
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!selectedImage) {
      setError("Please select an image to upload");
      return;
    }

    setIsLoading(true);
    try {
      // Mock API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Image uploaded successfully");
      setError("");
    } catch (err) {
      setError("Failed to upload image. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    event.currentTarget.classList.add("border-blue-500");
  };

  const handleDragLeave = (event) => {
    event.preventDefault();
    event.currentTarget.classList.remove("border-blue-500");
  };

  const handleDrop = (event) => {
    event.preventDefault();
    event.currentTarget.classList.remove("border-blue-500");
    const file = event.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      setError("");
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setError("Please drop a valid image file");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
          Update Profile Picture
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col items-center">
            <div className="relative group">
              <img
                src={previewUrl}
                alt="Profile preview"
                className="w-40 h-40 rounded-full object-cover border-4 border-gray-200 transition-transform duration-300 group-hover:scale-105"
              />
              <div
                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                onClick={() => fileInputRef.current?.click()}
              >
                <FaUpload className="text-white text-2xl" />
              </div>
            </div>

            <div
              className="mt-8 w-full border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:border-blue-500 transition-colors duration-300"
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
            >
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleImageChange}
                accept="image/*"
                className="hidden"
                aria-label="Choose profile picture"
              />
              <FaUpload className="mx-auto text-gray-400 text-3xl mb-4" />
              <p className="text-sm text-gray-600">
                Click or drag and drop an image here
              </p>
            </div>
          </div>

          {error && (
            <div className="flex items-center bg-red-50 text-red-500 p-3 rounded">
              <FaTimes className="mr-2" />
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-3 px-4 flex items-center justify-center rounded-md text-white font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-300 ${isLoading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"}`}
          >
            {isLoading ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Uploading...
              </>
            ) : (
              <>
                <FaCheck className="mr-2" /> Save Changes
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProfilePictureUpdate;
 * 
 * 
 */

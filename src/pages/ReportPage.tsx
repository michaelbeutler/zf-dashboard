import React, { useState } from "react";
import Webcam from "react-webcam";

const ReportPage: React.FC = () => {
  const videoConstraints = { facingMode: "environment" };

  const [photos, setPhotos] = useState<string[]>([]);

  const webcamRef = React.useRef(null);
  const capture = React.useCallback(() => {
    if (webcamRef && webcamRef.current) {
      const imageSrc = (webcamRef.current as any).getScreenshot();
      setPhotos((prevPhotos) => [...prevPhotos, imageSrc]);
    }
  }, [webcamRef]);

  return (
    <div>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-xl font-semibold text-gray-900">
              Report Inspection
            </h1>
            <p className="mt-2 text-sm text-gray-700">
              Use this form to report an Inspection. Take pictures of the
              Inspection and fill out the form below.
            </p>
          </div>
        </div>

        <div className="mt-6 mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            License Plate
          </label>
          <div className="mt-1">
            <input
              type="text"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              placeholder="ZH1234"
            />
          </div>
        </div>

        <div className="my-4">
          <Webcam
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            audio={false}
            videoConstraints={videoConstraints}
            imageSmoothing
          />

          <button
            disabled={photos.length >= 4}
            onClick={capture}
            type="button"
            className="my-2 inline-flex items-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Capture Photo
          </button>

          <div className="flex gap-2 items-stretc overflow-x-auto">
            {photos.map((photo, index) => (
              <img key={index} src={photo} className="w-32" />
            ))}
          </div>
        </div>

        <button
          disabled={photos.length < 4}
          onClick={() => alert("Submitted")}
          type="button"
          className="my-4 inline-flex items-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Create Inspection
        </button>
      </div>
    </div>
  );
};

export default ReportPage;

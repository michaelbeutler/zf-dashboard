import { ExclamationCircleIcon } from "@heroicons/react/24/outline";
import classNames from "classnames";
import React, { FormEventHandler, useRef, useState } from "react";
import Webcam from "react-webcam";

const ReportPage: React.FC = () => {
  const videoConstraints = { facingMode: "environment" };

  const [photos, setPhotos] = useState<string[]>([]);
  const [licensePlate, setLicensePlate] = useState<string>("");
  const [touched, setTouched] = useState<boolean>(false);
  const licensePlateInput = useRef<HTMLInputElement>(null);

  const webcamRef = React.useRef(null);
  const capture = React.useCallback(() => {
    if (webcamRef && webcamRef.current) {
      const imageSrc = (webcamRef.current as any).getScreenshot();
      setPhotos((prevPhotos) => [...prevPhotos, imageSrc]);
    }
  }, [webcamRef]);

  const onSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setTouched(true);
    if (licensePlate.length <= 3 || photos.length !== 4) {
      licensePlateInput.current !== null && licensePlateInput.current.focus();
      return false;
    }

    const response = await fetch("/api/report", {
      method: "POST",
      body: JSON.stringify({ licensePlate, photos }),
    });

    if (response.ok) {
      alert("Report submitted!");
      return true;
    }

    alert("There was an error submitting your report. 🥲");
    return false;
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
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
            <div className="relative mt-1 rounded-md shadow-sm">
              <input
                ref={licensePlateInput}
                type="text"
                className={classNames(
                  !touched || licensePlate.length > 3
                    ? "block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                    : "block w-full rounded-md border-red-300 pr-10 text-red-900 placeholder-red-300 focus:border-red-500 focus:outline-none focus:ring-red-500 sm:text-sm"
                )}
                placeholder="ZH1234"
                defaultValue={licensePlate}
                onInput={(e) => {
                  setLicensePlate(e.currentTarget.value);
                }}
                onChange={() => {
                  if (!touched) {
                    setTouched(true);
                  }
                }}
              />
              {touched && licensePlate.length < 3 && (
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                  <ExclamationCircleIcon
                    className="h-5 w-5 text-red-500"
                    aria-hidden="true"
                  />
                </div>
              )}
            </div>
            {touched && licensePlate.length < 3 && (
              <p className="mt-2 text-sm text-red-600" id="email-error">
                The license plate must be at least 3 characters long.
              </p>
            )}
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
              className="my-2 inline-flex items-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:bg-blue-300"
            >
              Capture Photo {photos.length} / 4
            </button>

            <div className="flex gap-2 items-stretc overflow-x-auto">
              {photos.map((photo, index) => (
                <img key={index} src={photo} className="w-24 md:w-32" />
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="my-4 inline-flex items-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Create Inspection
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReportPage;

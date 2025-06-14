import React from 'react';
import Modal from '@/components/common/Modal/Modal';
import { useGroupEditModal } from '@/hooks/useGroupEditModal';
import Alert from '@/components/common/Alert';
import ImageCropper from '../common/ImageCrop/ImageCropper';
import { Upload } from 'lucide-react';

interface GroupEditModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const GroupEditModal = ({ isOpen, onClose }: GroupEditModalProps) => {
  const {
    groupName,
    thumbnail,
    thumbnailPreview,
    errorMessage,
    isLoading,
    customAlert,
    handleInputChange,
    handleGroupNameBlur,
    handleFileChange,
    onConfirm,
  } = useGroupEditModal(isOpen);

  // 그룹 이미지 미리보기 커스텀 렌더링 함수
  const renderGroupPreview = (
    previewUrl: string | null,
    handleButtonClick: () => void,
  ) => (
    <div className="relative w-[400px] h-[300px] flex items-center justify-center bg-gray-100">
      <img
        src={previewUrl || ''}
        alt="Group Preview"
        className="max-w-full max-h-full object-contain"
        style={{ maxHeight: '300px' }}
      />
      <button
        onClick={handleButtonClick}
        className="absolute z-50 bg-blue-500 text-white font-p-500 py-2 px-3 rounded-[8px] bottom-[10px] right-[10px]">
        {/* 이미지 재업로드 */}
        <Upload width={'20px'} />
      </button>
    </div>
  );

  // 업로드 영역 커스텀 렌더링 함수
  const renderUploadBox = (
    handleButtonClick: () => void,
    handleDragOver: (e: React.DragEvent<HTMLDivElement>) => void,
    handleDrop: (e: React.DragEvent<HTMLDivElement>) => void,
  ) => (
    <div
      className="w-[370px] h-[260px] mt-[10px] border border-gray-600 flex flex-col items-center justify-center cursor-pointer"
      onClick={handleButtonClick}
      onDragOver={handleDragOver}
      onDrop={handleDrop}>
      <Upload size={32} className="text-gray-600 mb-2" />
      <p className="text-sm text-gray-600">클릭하거나 드래그</p>
    </div>
  );

  return (
    <>
      {customAlert.show && (
        <Alert message={customAlert.message} color={customAlert.color} />
      )}
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        title="그룹 수정"
        confirmButtonText={isLoading ? '저장 중...' : '저장하기'}
        cancelButtonText="취소하기"
        onConfirm={onConfirm}>
        <>
          {/* 썸네일 이미지 */}
          {/* <div className="mb-5">
          <p className="mb-2">그룹 대표 이미지</p>
          <div className="flex flex-col items-center">
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
              disabled={isLoading}
            />
            <div
              className="h-36 mb-2 border-4 overflow-hidden border-white shadow-md transition-all duration-300 hover:border-blue-300 cursor-pointer"
              onClick={handleImageClick}>
              <img
                src={thumbnailPreview}
                alt="그룹 썸네일"
                className="w-full h-full object-cover"
              />
            </div>
            <button
              type="button"
              onClick={handleImageClick}
              className="px-3 py-1 bg-blue-200 rounded-md hover:bg-blue-300 text-sm"
              disabled={isLoading}>
              이미지 변경
            </button>
          </div>
        </div> */}

          <div className="mb-5 flex flex-col gap-2">
            <p className="mb-2">그룹 대표 이미지</p>
            <p className="text-xs text-gray-500 text-center">
              이미지 크기는 100KB ~ 10MB 이내로 등록가능합니다.
            </p>
            <ImageCropper
              onImageChange={handleFileChange}
              initialImage={thumbnail}
              initialPreviewUrl={thumbnailPreview}
              allowedAspectRatios={['1:1', '4:3', '3:4']} // 그룹 이미지는 4:3, 3:4 비율 허용
              defaultAspectRatio="1:1" // 초기 crop 비율
              renderPreview={renderGroupPreview}
              renderUploadBox={renderUploadBox}
            />
          </div>

          {/* 그룹명 */}
          <div className="mb-4">
            <div className="flex justify-between">
              <p className="mb-1">
                그룹명
                <span className="p-1 text-sm text-gray-600">
                  (최소 1자 ~ 최대 10자)
                </span>
              </p>
              <p className="text-gray-600 mb-1 text-sm">
                {groupName.length}/10
              </p>
            </div>
            <input
              type="text"
              value={groupName}
              onChange={handleInputChange}
              onBlur={handleGroupNameBlur}
              className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
              placeholder="그룹명을 입력해주세요."
              maxLength={10}
              disabled={isLoading}
            />
            {errorMessage && (
              <p className="text-red-500 mt-1 text-sm">{errorMessage}</p>
            )}
          </div>
        </>
      </Modal>
    </>
  );
};

export default GroupEditModal;

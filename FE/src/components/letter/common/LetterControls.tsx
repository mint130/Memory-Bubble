import { useEffect, useState } from 'react';
import LetterDropdown from '@/components/letter/common/LetterDropDown';
import ColorSelector from '@/components/letter/common/ColorSelector';
import { useLetterStore } from '@/stores/useLetterStore';
import { COLOR_OPTIONS } from '@/utils/letterUtils';
import { useUserApi } from '@/apis/useUserApi';
import { LetterMember } from '@/types/Letter';
import useUserStore from '@/stores/useUserStore';

interface LetterControlsProps {
  onDateChange: (date: Date | null) => void;
  selectedDate?: Date; // Add prop to receive the date from parent
}

function LetterControls({ onDateChange, selectedDate: propSelectedDate }: LetterControlsProps) {
  const { selectedColor, setSelectedColor, selectedMember, setSelectedMember } =
    useLetterStore();
  const [familyMembers, setFamilyMembers] = useState<LetterMember[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { fetchFamilyInfo } = useUserApi();
  const { user } = useUserStore();

  // Convert input date to string format for the date input
  const [selectedDateString, setSelectedDateString] = useState('');

  useEffect(() => {
    // If a date is provided from the parent, use it
    // Otherwise, use today's date
    const dateToUse = propSelectedDate || new Date();
    const formattedDate = dateToUse.toISOString().split('T')[0];
    setSelectedDateString(formattedDate);
    
    // Initial load - notify parent component
    if (!propSelectedDate) {
      onDateChange(dateToUse);
    }
  }, [propSelectedDate, onDateChange]);

  // 가족 구성원 정보 조회
  useEffect(() => {
    const loadFamilyMembers = async () => {
      try {
        setIsLoading(true);

        // 가족 ID가 있는 경우에만 가족 정보 조회
        if (user.familyId) {
          const familyResponse = await fetchFamilyInfo(user.familyId);
          const family = familyResponse.data;

          // 가족 구성원 데이터를 LetterMember 형식으로 변환
          const members: LetterMember[] = family.familyMembers.map(
            (member) => ({
              id: member.userId.toString(),
              label: member.name,
            }),
          );

          setFamilyMembers(members);
        }
      } catch (error) {
        console.error('가족 구성원 정보 조회 실패:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadFamilyMembers();
  }, [fetchFamilyInfo, user.familyId]);

  const handleMemberSelect = (option: { id: string; label: string }) => {
    setSelectedMember(option);
  };

  const handleColorSelect = (colorId: string) => {
    setSelectedColor(colorId as any);
  };

  return (
    <div className="border-2 border-gray-300 rounded-[8px] h-full w-full mb-1">
      <div className="bg-gray-200 p-[10px] mb-[10px]">
        <p className="text-h5-lg font-p-500">편지 상세 설정</p>
      </div>

      <div className="ml-[12px]">
        {/* 받는 사람 */}
        <p className="text-subtitle-1-lg font-p-500 mb-[3px]">받는 사람</p>
        <LetterDropdown
          options={familyMembers}
          placeholder={isLoading ? '로딩 중...' : '멤버'}
          onSelect={handleMemberSelect}
          selectedOption={selectedMember}
        />

        {/* 느린 편지 보내기 */}
        <p className="text-subtitle-1-lg font-p-500">느린 편지 보내기</p>
        <p className="text-sm-lg mb-[3px]">
          설정 시, 해당 날짜에 열람 가능합니다.
        </p>

        <div className="mr-[12px] mb-[30px]">
          <input
            type="date"
            className="w-full border rounded-[8px] border-gray-300 p-2 text-sm"
            min={new Date().toISOString().split('T')[0]}
            value={selectedDateString}
            onChange={(e) => {
              const value = e.target.value;
              if (!value) {
                // 삭제된 경우: 오늘 날짜로 설정
                const today = new Date().toISOString().split("T")[0];
                setSelectedDateString(today);
                onDateChange(new Date(today));
              } else {
                setSelectedDateString(value);
                onDateChange(new Date(value));
              }
            }}
          />
        </div>

        {/* 색상 */}
        <p className="text-subtitle-1-lg font-p-500">색상</p>
        <ColorSelector
          colors={COLOR_OPTIONS}
          selectedColor={selectedColor}
          onSelectColor={handleColorSelect}
        />
      </div>
    </div>
  );
}

export default LetterControls;
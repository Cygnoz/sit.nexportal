import { useEffect, useState } from 'react';
import EditIcon from '../../../../assets/icons/EditIcon';
// import profileImage from '../../../../assets/image/AvatarImg.png';
import rightArrow from '../../../../assets/image/right-arrow.png';
import { endPoints } from '../../../../services/apiEndpoints';
import { useParams } from 'react-router-dom';
import useApi from '../../../../Hooks/useApi';
import NoRecords from '../../../../components/ui/NoRecords';
import SelectDropdown from '../../../../components/ui/SelectDropdown';
import DOMPurify from 'dompurify';

const ActivityTimeline = () => {
  const { request: getAllActivityTimeline } = useApi('get', 3001);
  const [activityData, setActivityData] = useState<any[]>([]);
  const { id } = useParams();

  const getActivityTimeline = async () => {
    try {
      const { response, error } = await getAllActivityTimeline(`${endPoints.ACTIVITY_TIMELINE}/${id}`);

      if (response && !error) {
        console.log('API Response:', response.data.activities); // Debugging
        setActivityData(response.data.activities || []);
      } else {
        console.log('API Error:', error.response.data.message);
      }
    } catch (err) {
      console.log('Fetch Error:', err);
    }
  };

  useEffect(() => {
    getActivityTimeline();
  }, []);

  const [selectedPeriod, setSelectedPeriod] = useState({ label: 'All Timelines', value: '' });
  const [selectedActivity, setSelectedActivity] = useState({ label: 'All Activities', value: '' });
  const [displayDate, setDisplayDate] = useState('');

  const activityOptions = [
  
    { label: 'Meeting', value: 'meeting' },
    { label: 'Mail', value: 'email' },
    { label: 'Note', value: 'note' },
    { label: 'Task', value: 'task' },
  ];

  const periodOptions = [
   
    { label: 'Today', value: 'today' },
    { label: 'Tomorrow', value: 'tomorrow' },
    { label: 'Yesterday', value: 'yesterday' },
    { label: 'after 7 Days', value: 'before_7_days' },
    { label: 'after 30 Days', value: 'before_30_days' },
  ];

  const updateDate = (selectedValue: string) => {
    const today = new Date();
    let formattedDate = '';

    switch (selectedValue) {
      case 'today':
        formattedDate = formatDate(today, 'Today');
        break;
      case 'yesterday':
        const yesterday = new Date(today);
        yesterday.setDate(today.getDate() - 1);
        formattedDate = formatDate(yesterday, 'Yesterday');
        break;
        case 'tomorrow':
            const tomorrow = new Date(today);
            tomorrow.setDate(today.getDate() + 1);
            formattedDate = formatDate(tomorrow, 'Tomorrow');
            break;
      case 'after_7_days':
        const after7Days = new Date(today);
        after7Days.setDate(today.getDate() + 7);
        formattedDate = formatDate(after7Days, 'after 7 Days');
        break;
      case 'after_30_days':
        const after30Days = new Date(today);
        after30Days.setDate(today.getDate() + 30);
        formattedDate = formatDate(after30Days, 'after 30 Days');
        break;
      default:
        formattedDate = '';
    }

    setDisplayDate(formattedDate);
  };

  const formatDate = (date: Date, label: string) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' } as const;
    const dateString = date.toLocaleDateString('en-US', options);
    return `${label}, ${dateString}`;
  };

  const handleActivitySelection = (selectedOption: any) => {
    console.log('Selected Activity:', selectedOption); // Debugging
    setSelectedActivity(selectedOption);
  };

  const handleTimelineSelection = (selectedOption: any) => {
    console.log('Selected Timeline:', selectedOption); // Debugging
    setSelectedPeriod(selectedOption);
    updateDate(selectedOption?.value);
  };

  const filteredActivities = activityData.filter((activity) => {
    if (!activity?.activityType) return false; // Ensure activityType exists
  
    const matchesActivity = 
      selectedActivity.value === '' || 
      selectedActivity.value.toLowerCase() === activity.activityType.toLowerCase();
  
    let DueDate = null;
    if (activity.activityType === 'Meeting') {
      DueDate = activity.dueDate ? new Date(activity.dueDate) : null;
    } else if (activity.activityType === 'Task') {
      DueDate = activity.dueDate ? new Date(activity.dueDate) : null;
    }
  
    const today = new Date();
    let matchesPeriod = selectedPeriod.value === '';
  
    if (DueDate) {
      matchesPeriod =
        (selectedPeriod.value === 'today' && DueDate.toDateString() === today.toDateString()) ||
        (selectedPeriod.value === 'yesterday' && DueDate.toDateString() === new Date(today.setDate(today.getDate() - 1)).toDateString()) ||
        (selectedPeriod.value === 'tomorrow' && DueDate.toDateString() === new Date(today.setDate(today.getDate() + 1)).toDateString()) ||
        (selectedPeriod.value === 'after_7_days' && DueDate >= new Date(today.setDate(today.getDate() + 7))) ||
        (selectedPeriod.value === 'after_30_days' && DueDate >= new Date(today.setDate(today.getDate() + 30)));
    }
  
    return matchesActivity && matchesPeriod;
  });
  
  return (
    <div>
      <div className="w-full h-fit rounded-lg p-5 gap-5 bg-[#FFFFFF]">
        <div className="flex gap-4">
          <SelectDropdown
            filteredData={activityOptions}
            selectedValue={selectedActivity}
            setSelectedValue={handleActivitySelection}
            placeholder="All Activities"
            searchPlaceholder="Search Activities"
            width="w-44"
          />

          <SelectDropdown
            filteredData={periodOptions}
            placeholder="All Timelines"
            selectedValue={selectedPeriod}
            setSelectedValue={handleTimelineSelection}
            searchPlaceholder="Search Timelines"
            width="w-44"
          />
        </div>

        {displayDate && <p className="text-[#303F58] text-sm font-bold mt-3">{displayDate}</p>}

        {filteredActivities.length > 0 ? (
          filteredActivities.map((timeline: any) => (
            <div className="bg-[#F5F9FC] p-5 rounded-lg my-4" key={timeline.id}>
              <div className="flex gap-6">
                <div className="mt-2 w-11 h-11 bg-[#EBEFF4] rounded-full">
                  <img className="w-6 h-6 ms-3 mt-[25%]" src={rightArrow} alt="" />
                </div>
                <div className="ms-2">
                  <p className="text-[#4B5C79] text-sm font-bold mt-1">{timeline?.description || 'N/A'}</p>
                </div>
                <div className="flex gap-2 mt-1">
                  <EditIcon size={20} />
                </div>
                <p className="text-[#4B5C79] text-xs font-medium mt-2">
                  {new Date(timeline?.createdAt).toLocaleString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                    hour: 'numeric',
                    minute: '2-digit',
                    hour12: true,
                  })}
                </p>
              </div>
              <div className="ms-20 -mt-4">
                <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(timeline?.note || timeline?.taskTitle || timeline?.meetingTitle || timeline?.subject || timeline?.emailMessage || 'N/A') }} />
              </div>
            </div>
          ))
        ) : (
          <NoRecords text="No Activities Found" imgSize={90} textSize="md" />
        )}
      </div>
    </div>
  );
};

export default ActivityTimeline;

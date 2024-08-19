import { useGetCalls } from "@/hooks/useGetCalls";

export const useHasUpcomingMeeting = () => {
  const { upcomingCalls, isLoading } = useGetCalls();

  const hasUpcomingMeeting = upcomingCalls && upcomingCalls.length > 0;
  const nextMeetingTime =
    hasUpcomingMeeting && upcomingCalls[0]?.state?.startsAt
      ? new Date(upcomingCalls[0].state.startsAt).toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
        })
      : null;

  return { hasUpcomingMeeting, isLoading, nextMeetingTime };
};

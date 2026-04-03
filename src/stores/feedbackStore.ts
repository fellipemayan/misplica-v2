import { defineStore } from 'pinia';
import { ref, watch } from 'vue';

type VoteType = 'like' | 'dislike' | null;

export const useFeedbackStore = defineStore('feedback', () => {
  const savedVotes = localStorage.getItem('misplica-votes');

  const votes = ref<Record<string, VoteType>>(
    savedVotes ? JSON.parse(savedVotes) : {}
  );

  watch(votes, (newVotes) => {
    localStorage.setItem('misplica-votes', JSON.stringify(newVotes));
  }, { deep: true });

  const setVote = (widgetId: string, vote: VoteType) => {
    votes.value[widgetId] = vote;
  };

  const getVote = (widgetId: string): VoteType => {
    return votes.value[widgetId] || null;
  };

  return { votes, setVote, getVote };
});

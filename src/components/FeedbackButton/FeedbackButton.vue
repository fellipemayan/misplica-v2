<script setup lang="ts">
import { ref, computed } from 'vue';
import { useFeedbackStore } from '@/stores/feedbackStore';
import { useSnackbar } from '@/composables/useSnackbar';
import PopoverComponent from '../PopoverComponent/PopoverComponent.vue';
const props = defineProps<{
  widgetId: string;
}>();

const feedbackStore = useFeedbackStore();

const userVote = computed(() => feedbackStore.getVote(props.widgetId));

const isModalOpen = ref(false);
const currentAction = ref<'like' | 'dislike' | 'remove_like' | 'remove_dislike' | null>(null);

const rating = ref(0);
const comment = ref('');
const isSubmitting = ref(false);
const isSuccess = ref(false);

const { showSnackbar } = useSnackbar();

const handleVote = (action: 'like' | 'dislike') => {
  rating.value = 0;
  comment.value = '';

  if (userVote.value === action) {
    currentAction.value = action === 'like' ? 'remove_like' : 'remove_dislike';
    feedbackStore.setVote(props.widgetId, null);
  } else {
    currentAction.value = action;
    feedbackStore.setVote(props.widgetId, action);
  }

  isModalOpen.value = true;
};

const modalContent = computed(() => {
  switch (currentAction.value) {
    case 'like':
      return {
        title: 'Ficamos felizes que curtiu!',
        desc: 'Conta pra gente o que mais chamou sua atenção nesta seção.'
      };
    case 'dislike':
      return {
        title: 'Poxa, o que deu errado?',
        desc: 'Seu feedback é fundamental. O que podemos melhorar aqui?'
      };
    case 'remove_like':
      return {
        title: 'Mudou de ideia?',
        desc: 'Vimos que você removeu sua curtida. Faltou alguma coisa?'
      };
    case 'remove_dislike':
      return {
        title: 'Dando uma segunda chance?',
        desc: 'Que bom que a experiência melhorou. Deixe uma nota para o nosso conteúdo!'
      };
    default:
      return { title: 'Feedback', desc: 'Deixe sua opinião.' };
  }
});

const submitFeedback = async () => {
  if (rating.value === 0) {
    alert("Por favor, selecione uma nota de 1 a 5 estrelas antes de enviar.");
    return;
  }

  isSubmitting.value = true;

  const formspreeId = import.meta.env.VITE_FORMSPREE_ID;

  try {
    const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        action: currentAction.value,
        final_state: userVote.value || 'neutral',
        rating: rating.value,
        comment: comment.value,
        url: window.location.href
      })
    });

    if (response.ok) {
      isModalOpen.value = false;
      showSnackbar('Feedback enviado com sucesso! Obrigado.', 'success');
    } else {
      throw new Error('Falha na API do Formspree');
    }
  } catch (error) {
    isModalOpen.value = false;
    showSnackbar('Houve um erro ao enviar. Tente novamente.', 'error');
    console.error(error);
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<template>
  <div class="feedback-widget">
    <div class="btn-group">
      <button
        class="btn-vote like"
        :class="{ 'is-active': userVote === 'like' }"
        @click="handleVote('like')"
      >
        <span class="material-symbols-outlined icon">thumb_up</span>
      </button>

      <div class="divider"></div>

      <button
        class="btn-vote dislike"
        :class="{ 'is-active': userVote === 'dislike' }"
        @click="handleVote('dislike')"
      >
        <span class="material-symbols-outlined icon">thumb_down</span>
      </button>
    </div>

    <PopoverComponent
      v-model:open="isModalOpen"
      signId="feedback-modal"
      :persistent="true"
      width="sm"
    >
      <div v-if="!isSuccess" class="form-view">
        <h3 class="modal-title">{{ modalContent.title }}</h3>
        <p class="modal-desc">{{ modalContent.desc }}</p>

        <div class="star-rating" role="group" aria-label="Avalie de 1 a 5 estrelas">
          <button
            v-for="star in 5"
            :key="star"
            class="btn-star"
            :class="{ 'is-filled': star <= rating }"
            @click="rating = star"
            :aria-label="`Dar ${star} estrelas`"
          >
            <span class="material-symbols-outlined">
              {{ star <= rating ? 'star' : 'star_rate' }}
            </span>
          </button>
        </div>

        <div class="input-group">
          <label for="feedback-comment">Comentário (Opcional)</label>
          <textarea
            id="feedback-comment"
            v-model="comment"
            rows="3"
            placeholder="Digite aqui suas sugestões ou críticas..."
          ></textarea>
        </div>

        <div class="actions">
          <button class="btn btn-ghost" @click="isModalOpen = false" :disabled="isSubmitting">
            Cancelar
          </button>
          <button class="btn btn-primary" @click="submitFeedback" :disabled="isSubmitting">
            {{ isSubmitting ? 'Enviando...' : 'Enviar Feedback' }}
          </button>
        </div>
      </div>

      <div v-else class="success-view">
        <span class="material-symbols-outlined success-icon">check_circle</span>
        <h3>Feedback Enviado!</h3>
        <p>Muito obrigado por ajudar a melhorar a plataforma.</p>
      </div>
    </PopoverComponent>
  </div>
</template>

<style scoped>
.btn-group {
  display: inline-flex;
  align-items: center;
  background-color: var(--clr-bg);
  border-radius: var(--base-radius);
  overflow: hidden;
  border: 1px solid var(--clr-border);
}

.btn-vote {
  --color: var(--clr-text);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: transparent;
  border: none;
  cursor: pointer;
  font-weight: 500;
  transition: background-color 0.2s, color 0.2s;

  .material-symbols-outlined {
    color: var(--color);
  }
}

.btn-vote:hover {
  background-color: var(--clr-bg-hover);
}

.btn-vote.is-active {
  .material-symbols-outlined {
    font-variation-settings: "FILL" 1, "wght" 500, "GRAD" 0, "opsz" 48;
  }
  &.like {
    --color: var(--clr-primary);
  }
  &.dislike {
    --color: var(--clr-error);
  }
}

.count {
  font-size: 0.875rem;
}

.icon {
  font-size: 1.25rem;
}

.divider {
  width: 1px;
  height: 1.5rem;
  background-color: var(--clr-border-muted);
}

.modal-title {
  margin-top: 0;
  margin-bottom: 0.5rem;
  font-size: 1.25rem;
}

.modal-desc {
  color: var(--clr-text-muted);
  font-size: 0.95rem;
  margin-bottom: 1.5rem;
}

.star-rating {
  display: flex;
  gap: 0.25rem;
  margin-bottom: 1.5rem;
  justify-content: center;
}

.btn-star {
  background: transparent;
  border: none;
  cursor: pointer;
  color: var(--clr-border-muted);
  padding: 0.25rem;
  transition: color 0.2s, transform 0.1s;
}

.btn-star:hover {
  transform: scale(1.2);
}

.btn-star.is-filled {
  color: var(--clr-primary);
  font-variation-settings: "FILL" 1, "wght" 500, "GRAD" 0, "opsz" 48;
}

.btn-star .material-symbols-outlined {
  font-size: 2rem;
}

.input-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.input-group label {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--clr-text-alt);
}

textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--clr-border);
  border-radius: var(--base-radius);
  background-color: var(--clr-bg);
  color: var(--clr-text);
  font-family: inherit;
  resize: vertical;
}

textarea:focus {
  outline: 2px solid var(--clr-primary);
  border-color: transparent;
}

.actions {
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
}

.btn-ghost {
  background: transparent;
  border: none;
  color: var(--clr-text-muted);
  cursor: pointer;
}

.btn-ghost:hover {
  color: var(--clr-text);
}

.success-view {
  text-align: center;
  padding: 2rem 1rem;
}

.success-icon {
  font-size: 3rem;
  color: var(--clr-success);
  margin-bottom: 1rem;
}
</style>

import { defineStore } from 'pinia'
import { reactive, watch } from 'vue'

export interface UserPreferences {
  theme: 'default' | 'light' | 'dark'
  contrast: 'default' | 'high'
  fontSize: 'small' | 'default' | 'large'
  animations: boolean
}

export const usePreferencesStore = defineStore('preferences', () => {
  const loadPreferences = (): UserPreferences => {
    const saved = localStorage.getItem('misplica-prefs')
    if (saved) {
      try {
        return JSON.parse(saved)
      } catch (e) {
        console.error('Erro ao ler preferências do localStorage', e)
      }
    }
    return {
      theme: 'default',
      contrast: 'default',
      fontSize: 'default',
      animations: true,
    }
  }

  const state = reactive<UserPreferences>(loadPreferences())

  watch(
    state,
    (newState) => {
      localStorage.setItem('misplica-prefs', JSON.stringify(newState))

      const root = document.documentElement
      root.dataset.theme = newState.theme
      root.dataset.contrast = newState.contrast
      root.dataset.fontSize = newState.fontSize
      root.dataset.animations = newState.animations.toString()
    },
    { deep: true, immediate: true }
  )
  return { state }
})

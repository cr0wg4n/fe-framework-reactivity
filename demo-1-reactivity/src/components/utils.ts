import { shallowRef, triggerRef } from 'vue'


// From Angular
export function signal(initialValue) {
  const r = shallowRef(initialValue)
  const s = () => r.value
  s.set = (value) => {
    r.value = value
  }
  s.update = (updater) => {
    r.value = updater(r.value)
  }
  s.mutate = (mutator) => {
    mutator(r.value)
    triggerRef(r)
  }
  return s
}

// From Solid
export function createSignal(value, options) {
  const r = shallowRef(value)
  const get = () => r.value
  const set = (v) => {
      r.value = typeof v === 'function' ? v(r.value) : v
      if (options?.equals === false) triggerRef(r)
  }
  return [get, set]
}
<template>
  <div>Redireccionando...</div>
</template>

<script>
export default {
  middleware({ redirect }) {
    return redirect('/personajes')
  },
}
</script>

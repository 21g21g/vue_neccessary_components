<script setup>
</script>
<template>
    
<VMenu
placement="'bottom-start'" offset="5"
>
  <button>Documentation</button>

  <template #popper>
    <button>Guide</button>
    <button>API Reference</button>
  </template>
</VMenu>
</template>
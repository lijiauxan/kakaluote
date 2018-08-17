<template>
    <div>
        <button @click="$emit('xx')">add</button>
        <slot>
        </slot>
    </div>
</template>
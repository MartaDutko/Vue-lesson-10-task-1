<template>
    <div class="block__select">
        <div>{{ task.title }}</div>
        <div>
            <select v-model="selectedResponsibleStudent" @change="onChange(task.id)">
                <option v-for="student in listStudent" :key="student.id" :value="student.id">
                    {{ student.name }}
                </option>
            </select>
        </div>
    </div>
</template>
<script>
export default {
    name: 'TaskSelector',
    props: {
        task: {
            type: Object,
            default: () => ({}),
        },
        listStudent: {
            type: Array,
            default: () => [],
        },
    },
    data() {
        return {
            selectedResponsibleStudent: null,
        }
    },
    methods: {
        onChange(taskId) {
            const obj = {
                taskId: taskId,
                studentId: this.selectedResponsibleStudent,
            }
            this.$emit('on-change', obj)
        },
    },
    emits: ['on-change'],
}
</script>

<style lang="scss" scoped>
.block__select {
    display: flex;
    justify-content: space-between;
}
</style>
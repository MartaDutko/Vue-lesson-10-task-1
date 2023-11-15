<template>
    <div v-show="isStudentBlock" class="block__itemTask">
        <h3>{{ student.name }}</h3>
        <div v-for="task in listTask" :key="task" class="blockTask">
            <span>{{ task.title }}</span>
            <button @click="onDelete(student.id,task.id)">X</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'StudentTask',
    props: {
        student: {
            type: Object,
            default: () => ({}),
        },
        listTask: {
            type: Array,
            default: () => [],
        },
    },
    computed: {
        isStudentBlock() {
            return this.listTask.length
        }
    },
    methods: {
        onDelete(studentId,taskId) {
            const deleteTask={
                studentId,
                taskId
            }
            this.$emit('onDelete',deleteTask)
        },
    },
}
</script>

<style lang="scss" scoped>
.block__itemTask {
    width: 30%;
    .blockTask {
        display: flex;
        justify-content: space-between;
    }
}
</style>
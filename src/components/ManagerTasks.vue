<template>
    <div class="wrapper">
        <div class="block__tasks-manager">
            <h3>Розподілювач задач</h3>
            <h4>Задачі:</h4>
            <div v-for="task in getListTasks" :key="task.id" class="block-tasks">
                <task-selector :task="task" :list-student="getListStudents" @on-change="chooseTask" />
            </div>
        </div>
        <div v-for="task in getListSelectedStudentTasks" :key="task.studentId" class="block__studentTask">
            <student-task
                :student="getStudentById(task.studentId)"
                :list-task="getStudentListTaskById(task.listTasksId)"
                @on-delete="deleteTask"
            />
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import StudentTask from './StudentTask.vue'
import TaskSelector from './TaskSelector.vue'

export default {
    name: 'ManagerTasks',
    components: { TaskSelector, StudentTask },
    computed: {
        ...mapGetters([
            'getListTasks',
            'getListStudents',
            'getListSelectedStudentTasks',
            'getStudentById',
            'getStudentListTaskById',
        ]),
    },
    methods: {
        ...mapActions(['initData', 'actionListSelectedStudentTasks',
        'deleteListSelectedStudentTasks']),
        chooseTask(obj) {
            this.actionListSelectedStudentTasks(obj)
        },
        deleteTask(deleteTask){
            this.deleteListSelectedStudentTasks(deleteTask)
        }
    },
    created() {
        this.initData()
    },
}
</script>

<style lang="scss" scoped>
.block__tasks-manager {
    width: 30%;
    padding: 10px;
}
</style>
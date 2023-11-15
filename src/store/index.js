import { createStore } from "vuex";
import { listStudent, listTasks } from "@/data/data";

export default createStore({
  state: {
    listStudents: [],
    listTasks: [],
    listSelectedStudentTasks: []
  },
  getters: {
    getListStudents: ({ listStudents }) => listStudents,
    getListTasks: ({ listTasks }) => listTasks,
    getListSelectedStudentTasks: ({ listSelectedStudentTasks }) => listSelectedStudentTasks,
    getStudentById: (state) => (studentId) => state.listStudents.find(item =>
      item.id === studentId),
    getStudentListTaskById: (state) => (listTasks) => state.listTasks.filter(item =>
      listTasks.includes(item.id))

  },
  mutations: {
    initData(state, { listStudent, listTasks }) {
      state.listStudents = listStudent
      state.listTasks = listTasks
    },
    mutationListSelectedStudentTasks(state, { taskId,
      studentId }) {
      const existingStudentIndex = state.listSelectedStudentTasks.findIndex(item =>
        item.listTasksId.includes(taskId))
      if (existingStudentIndex !== -1) {
        state.listSelectedStudentTasks[existingStudentIndex].listTasksId =
          state.listSelectedStudentTasks[existingStudentIndex].listTasksId.filter(item =>
            item !== taskId)
      }
      const findStudentId = state.listSelectedStudentTasks.find(item =>
        item.studentId === studentId)
      if (findStudentId) {
        findStudentId.listTasksId.push(taskId)
      }
      else {
        state.listSelectedStudentTasks.push({
          studentId: studentId,
          listTasksId: [taskId]
        })
      }
    },
    deleteListSelectedStudentTasks(state, { studentId, taskId }) {
      const studentIndex = state.listSelectedStudentTasks.findIndex(item =>
      item.studentId === studentId)
      state.listSelectedStudentTasks[studentIndex].listTasksId = state.listSelectedStudentTasks
      [studentIndex].listTasksId.filter(item => item !== taskId)
    }
  },
  actions: {
    initData({ commit }) {
      commit('initData', { listStudent, listTasks })
    },
    actionListSelectedStudentTasks({ commit }, data) {
      commit('mutationListSelectedStudentTasks', data)
    },
    deleteListSelectedStudentTasks({ commit }, deleteTask) {
      commit('deleteListSelectedStudentTasks', deleteTask)
    }
  },
  modules: {},
});

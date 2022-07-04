// import HashPassword from '../libs/security/bcryptjs';
import TaskModel from '../models/TaskModel';
import UserModel from '../models/UserModel';
import { ParamTask } from '../@types/types/task.types';
import ErrorRes from '../libs/res/error.res';
import TaskRes from '../libs/res/task.res';

export default class TaskService {
  private taskModel;

  private userModel;

  constructor() {
    this.taskModel = new TaskModel();
    this.userModel = new UserModel();
  }

  public async create({ task, userId }: ParamTask) {
    const verifyUserId = await this.userModel.findById(userId);

    if (!verifyUserId) return ErrorRes.notFound({ message: 'User not found' });

    const newTask = await this.taskModel.create(task, userId);

    return TaskRes.create(newTask);
  }
}

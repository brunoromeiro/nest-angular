import {Component, OnInit} from '@angular/core';
import {TasksService} from "./shared/tasks.service";
import {Task} from "./shared/task";

@Component({
    selector: 'app-root',
    template: `
        <div class="row">
            <div class="col">
                <h1>Tasks Example</h1>
                <div *ngIf="tasks.length > 0">
                    <table class="table table-hover">
                        <thead class="thead-light">
                        <tr>
                            <th scope="col">Task</th>
                            <th scope="col">Completed</th>
                            <th scope="col">Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr *ngFor="let t of tasks; index as i">
                            <td>{{t.description}}</td>
                            <td>{{t.completed}}</td>
                            <td>
                                <button type="button" class="btn btn-sm btn-success" (click)="update(t)">Edit</button>
                                <button type="button" class="btn btn-sm btn-danger" (click)="delete(t._id)">Delete
                                </button>

                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div *ngIf="tasks.length === 0">
                    Não existem tasks
                </div>
            </div>
        </div>
    `,
    styles: []
})
export class AppComponent implements OnInit {
    title = 'nest-angular';
    tasks: Task[] = [];

    constructor(
        private service: TasksService
    ) {
    }

    ngOnInit() {
        this.getAll();

    }

    getAll() {
        console.log('entrei');
        this.service.getAll()
            .subscribe(task => this.tasks = task);
    }

    update(task: Task) {
        let id: string;
        if (task) {
            id = task._id;
            console.log('tela de edit', id, task);
        }

        return;
    }

    delete(id: string) {
        this.service.delete(id)
            .subscribe(
                () => {
                    console.log(`Task com ${id} deletada com sucesso`);
                },
                (error) => console.error(error),
                () => this.getAll()
            );
    }

}

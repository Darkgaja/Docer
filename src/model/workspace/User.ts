import { BaseEntity, Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import UserWorkspace from "./UserWorkspace";

@Entity()
export default class User extends BaseEntity {

    @PrimaryColumn()
    public name: string = "";

    @Column()
    public password: string = "";

    @OneToMany((_type) => UserWorkspace, (workspace) => workspace.user, { onDelete: "CASCADE" })
    public workspaces?: UserWorkspace[];
}

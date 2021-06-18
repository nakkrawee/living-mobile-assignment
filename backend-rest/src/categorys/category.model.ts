import { Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { StoreModel } from 'src/stores/store.model';

@Table({
    tableName: 'category',
})
export class CategoryModel extends Model {
    @Column({
        defaultValue: DataType.UUIDV4,
        primaryKey: true,
        allowNull: false,
    type: DataType.UUID,
    })
    id: string;

    @Column
    name: string;

    @Column({
        defaultValue: DataType.UUIDV4,
        primaryKey: true,
        allowNull: false,
        type: DataType.UUID
    })
    @ForeignKey(()=> StoreModel)
    storeId: string;


}
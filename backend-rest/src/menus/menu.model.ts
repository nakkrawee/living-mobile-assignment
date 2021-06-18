import { Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { CategoryModel } from 'src/categorys/category.model';
 
@Table({
   tableName: 'menu',
})
 
export class MenuModel extends Model {
   @Column({
       defaultValue: DataType.UUIDV4,
       primaryKey: true,
       allowNull: false,
       type: DataType.UUID
   })
   id: string;

   @Column({
        defaultValue: DataType.UUIDV4,
        primaryKey: true,
        allowNull: false,
        type: DataType.UUID
    })
    @ForeignKey(()=> CategoryModel)
    categoryId: string;
  
   @Column
   name: string;
 
   @Column
   price: number;
 

}



// This is an object to hold inserted data,
// then get push to the database

export class Task {
    // _id will get grenerated with the Schema in DataBase
    // it's optional, when add a new task we don't need this id :)
    public _id?: string; 
    public name: string;
    public time: string;
}

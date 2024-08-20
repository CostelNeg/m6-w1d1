import {Schema,model} from "mongoose";

//definiamo lo schema del nostro autore
const authorSchema = new Schema(
  {
  name: { 
    type: String,
    required:true
  },
  surname: { 
    type: String
  },
  email: { 
    type: String
  }
},
{collection:"author"}
);

//const Author = mongoose.model('Author',authorSchema);

export default model("Author", authorSchema)
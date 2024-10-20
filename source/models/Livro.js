import mongoose from "mongoose";
import { autorScheema } from "./Autor.js";

const livroSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    titulo: { type: mongoose.Schema.Types.String, required: true },
    editora: { type: mongoose.Schema.Types.String },
    preco: { type: mongoose.Schema.Types.Number },
    pagina: { type: mongoose.Schema.Types.Number },
    autor: autorScheema
}, { versionKey: false }
);

const livro = mongoose.model("livros", livroSchema);

export default livro;
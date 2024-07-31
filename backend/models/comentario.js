import mongoose from 'mongoose';

const comentarioSchema = new mongoose.Schema({
  services: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Services'
    },
  coments: {
    type: String,
    required: true,
    trim: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  fecha: {
    type: Date,
    default: Date.now,
    required: true
  }
});

const Comentario = mongoose.model('Comentario', comentarioSchema);

export default Comentario;

import mongoose from 'mongoose';

const gradeSchema = new mongoose.Schema({
  learner_id: {
    type: Number,
    required: true,
  },
  class_id: {
    type: Number,
    required: true,
  },
  scores: [
    {
      type: {
        type: String,
        enum: ['exam', 'quiz', 'homework', 'test'],
      },
      score: Number,
    },
  ],
});

export default mongoose.model('grades', gradeSchema);

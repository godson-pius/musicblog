import mongoose from 'mongoose'

const songSchema = mongoose.Schema({
    
    title: { type: String, required: [true, 'Title is required'] },
    albumName: { type: String, required: [true, 'Album is required'], default: '' },
    yearOfRelease: { type: String, required: [true, 'Year of release is required'] },
    genre: { type: String, required: [true, 'Genre is required'] },
    country: { type: String, required: [true, 'Country is required'], default: 'ng' },
    description: { type: String, required: [true, 'Description is required'] },

}, { timestamps: true })

const Song = mongoose.models.Song || mongoose.model('Song', songSchema);
export default Song;
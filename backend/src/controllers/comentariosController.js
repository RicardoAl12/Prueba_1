const comentario = require ('../models/comentarios')

exports.agregarComentario = async(req, res) =>{
    try{
        const newComentario = new comentario (req.body)
        await newComentario.save()
        res.status(200).json('Comentario Agregado')
    }catch(err){
        res.status(500).send('Error al agregar comentario')
    }
}

exports.eliminarComentario = async (req, res) => {
    try {
        const comentarioId = req.params.id;

        // Eliminar el comentario por ID
        const result = await Comentario.findByIdAndDelete(comentarioId);

        if (!result) {
            return res.status(404).json({ message: 'Comentario no encontrado' });
        }

        res.status(200).json({ message: 'Comentario eliminado correctamente' });
    } catch (err) {
        console.error(err);
        res.status(500).send('Error al eliminar comentario');
    }
}
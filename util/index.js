module.exports.respond = (error, data, request, response) => {
    if(error) response.status(200).json({ 'success': false, 'error': error });
    else response.status(200).json(data);
};

function status(request, response) {
  response.status(200).json({ chave: "vocês são demais!" });
}

export default status;

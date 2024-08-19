const Request = require('../models/Request');

exports.createRequest = async (req, res) => {
  try {
    const { bloodType, quantity, urgency } = req.body;
    const request = new Request({ hospital: req.user.id, bloodType, quantity, urgency });
    await request.save();
    res.status(201).json({ message: 'Request created successfully', request });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getRequests = async (req, res) => {
  try {
    const requests = await Request.find().populate('hospital');
    res.json(requests);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateRequest = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const request = await Request.findByIdAndUpdate(id, { status }, { new: true });
    if (!request) return res.status(404).json({ error: 'Request not found' });
    res.json({ message: 'Request updated successfully', request });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

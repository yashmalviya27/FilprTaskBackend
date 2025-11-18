const client = require("../models/client.model");
const Contact = require("../models/contact.model");
const Project = require("../models/project.model");
const Subscribed = require("../models/subscribed.model");


async function createInquiry(req, res) {
    const { name, email, phone, City } = req.body;
    try {
        const inquiry = await Contact.create({ name, email, phone, City });
        res.status(201).json({
            message: "Inquiry created successfully",
            inquiry
        });

    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message });
    }
}

async function getAllProjects(req, res) {
    try {
        const projects = await Project.find();
        res.status(200).json(projects);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch projects' });
    }
}

async function getAllClients(req, res) {
    try {
        const clients = await client.find();
        res.status(200).json(clients);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch clients' });
    }
}

async function addSubscribed(req, res) {
    const { email } = req.body;
    try {
        const subscribed = await Subscribed.create({ email });
        res.status(201).json({
            message: "Subscribed created successfully",
            subscribed
        });
    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message });
    }
}


module.exports = {
    getAllProjects,
    getAllClients,
    createInquiry,
    addSubscribed
};
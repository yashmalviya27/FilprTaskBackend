const client = require("../models/client.model");
const Contact = require("../models/contact.model");
const Project = require("../models/project.model");
const Subscribed = require("../models/subscribed.model");
const { upload } = require("../service/image.service");


async function addProject(req, res) {
    const { name, description } = req.body;
    const file = req.file;
    try {
        const uploadedImage = await upload(file);
        const newProject = await Project.create({
            name,
            description,
            image: uploadedImage.url
        });
        res.status(201).json(newProject);
    } catch (error) {
        res.status(500).json({
            error: 'Failed to add project',
            message: error.message
        });
    }
}



async function addClient(req, res) {
    const { name, description, Designation } = req.body;
    const file = req.file;
    try {
        const uploadedImage = await upload(file);
        const data = await client.create({
            name,
            description,
            image: uploadedImage.url,
            Designation
        });

        return res.status(201).json({
            message: "Client added successfully",
            data
        });

    } catch (error) {
        return res.status(500).json({
            message: "Server Error",
            error: error.message
        });
    }
}

async function getAllClients(req, res) {
    try {
        const clients = await client.find();
        res.status(200).json(clients);
    } catch (error) {
        res.status(500).json({
            error: 'Failed to fetch clients',
            message: error.message
        });
    }
}


async function getAllInquiries(req, res) {
    try {
        const inquiries = await Contact.find();
        res.status(200).json(inquiries);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch inquiries' });
    }
}

async function getAllSubscriptions(req, res) {
    try {
        const subscriptions = await Subscribed.find();
        res.status(200).json(subscriptions);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch subscriptions' });
    }
}

module.exports = {
    addProject,
    addClient,
    getAllClients,
    getAllInquiries,
    getAllSubscriptions
};
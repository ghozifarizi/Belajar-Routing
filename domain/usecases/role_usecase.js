// npm install mongoose uuid

const repositories = require('../repositories/role_repository');
const { v4: uuidv4 } = require('uuid');


// Function to create a new role
const create = async (roleData) => {
    try {
        const roleId = uuidv4();
        const role = {
            role_id: roleId,
            ...roleData
        };
        const createdRole = await repositories.create(role);
        return createdRole;
    } catch (error) {
        throw new Error('Failed to create role');
    }
};

// Function to get list of roles
const getList = async () => {
    try {
        const roles = await repositories.findAll();
        return roles;
    } catch (error) {
        throw new Error('Failed to get list of roles');
    }
}

// Function to update a role by role_id
const updateOne = async (roleId, updateData) => {
    try {
        const updatedRole = await repositories.updateOne({ role_id: roleId }, updateData);
        if (!updatedRole) {
            throw new Error('Role not found');
        }
        return updatedRole;
    } catch (error) {
        throw new Error('Failed to update role');
    }
};

// Function to delete a role by role_id
const deleteOne = async (roleId) => {
    try {
        const result = await repositories.deleteOne({ role_id: roleId });
        if (result.deletedCount === 0) {
            throw new Error('Role not found');
        }
        return { message: 'Role deleted successfully' };
    } catch (error) {
        throw new Error('Failed to delete role');
    }
};

module.exports = { create, getList, updateOne, deleteOne };

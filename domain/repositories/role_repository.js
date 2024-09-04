// npm install mongoose uuid

const Role = require('../models/role_model');

// Function to save a new role
async function create(role) {
  try {

    // Create a new user
    const newRole = new Role(role);

    // Save the user to the database
    const savedRole = await newRole.save();
    return savedRole;
  } catch (error) {
    console.error('Error creating role:', error);
    throw error;
  }
}

// Function to get a role by role id
async function getOneByRoleId(roleId) {
    try {
        const role = await Role.findOne({ role_id: roleId });
        return role;
    } catch (error) {
        console.error('Error getting role by role_id:', error);
        throw error;
    }
}

// Function to get a role by role name
async function getOneByName(name) {
  try {
      const role = await Role.findOne({ name: name });
      return role;
  } catch (error) {
      console.error('Error getting role by role_id:', error);
      throw error;
  }
}

// Function to find all roles
async function findAll() {
  try {
    const roles = await Role.find();
    return roles;
  } catch (error) {
    console.error('Error finding roles:', error);
    throw error;
  }
}



// Function to update a role by role_id
async function updateOne(roleId, updateData) {
  try {
    // Find the role by role_id and update it
    const updatedRole = await Role.findOneAndUpdate({ role_id: roleId }, updateData, { new: true });
    if (!updatedRole) {
      throw new Error('Role not found');
    }
    return updatedRole;
  } catch (error) {
    console.error('Error updating role:', error);
    throw error;
  }
}

// Function to delete a role by role_id
async function deleteOne(roleId) {
  try {
    // Find and delete the role by role_id
    const result = await Role.deleteOne({ role_id: roleId });
    if (result.deletedCount === 0) {
      throw new Error('Role not found');
    }
    return { message: 'Role deleted successfully' };
  } catch (error) {
    console.error('Error deleting role:', error);
    throw error;
  }
}

module.exports = { create, getOneByRoleId, getOneByName, findAll, updateOne, deleteOne};

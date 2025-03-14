const CategoriesRepository = require('../repositories/CategoriesRepository'); // Corrigir o caminho

class CategoryController {
    async index(request, response) {
        const categories = await CategoriesRepository.findAll();
        return response.json(categories);
    }

    async store(request, response) {
        const { name } = request.body;

        if (!name) {
            return response.status(400).json({ error: "Name is required" });
        }

        const category = await CategoriesRepository.create({ name });
        return response.json(category);
    }
}

module.exports = new CategoryController();
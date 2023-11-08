'use strict';

const {entityService} = require('@strapi/strapi').factories

/**
 * product controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::product.product', ({strapi})=>({
     find: async (ctx)=>{
        try {
            const categories = await strapi.entityService.findMany('api::category.category')
             console.log('categories::::::',categories);
             
            ctx.body=categories
        } catch (error) {
            ctx.body=error
        }
    },
}));

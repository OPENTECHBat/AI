/** @odoo-module **/

import { registry } from "@web/core/registry";
import { Component } from "@odoo/owl";
import { useService } from "@web/core/utils/hooks";

/**
 * AI Universal Search Menu Component
 * Adds a search button to the systray that opens the AI Universal Search page
 */
export class AISearchMenu extends Component {
    setup() {
        this.actionService = useService("action");
    }
    
    openSearchPage() {
        // Use the fully qualified XML ID of the client action
        this.actionService.doAction("ai_universal_search.action_ai_universal_search");
    }
}

// Define the template for the menu item
AISearchMenu.template = 'ai_universal_search.search_menu';

// Register the menu in the systray
registry.category("systray").add("ai_universal_search", {
    Component: AISearchMenu,
}, { sequence: 15 });

export default AISearchMenu;

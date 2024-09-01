export default class Task {
	// id - Identificador único de cada task
	// title - Título da task
	// description - Descrição detalhada da task
	// completed_at - Data de quando a task foi concluída. O valor inicial deve ser `null`
	// created_at - Data de quando a task foi criada.
	// updated_at - Deve ser sempre alterado para a data de quando a task foi atualizada.
	constructor({
		id,
		title,
		description,
		completed_at = null,
		created_at = new Date(),
		updated_at = null,
	}) {
		this.id = id;
		this.title = title;
		this.description = description;
		this.completed_at = completed_at;
		this.created_at = created_at;
		this.updated_at = updated_at;
	}
}

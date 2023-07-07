const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];

function agendarPaciente(pacientes, paciente) {
    for (let i = 0; i < pacientes.length; i++) {
        if (pacientes[i] === paciente) {
            const pacienteAgendado = pacientes.splice(i, 1);
            pacientes.push(pacienteAgendado[0]);
            return;
        }
    }
}

function atenderPaciente(pacientes) {
            pacientes.splice(0, 1);
            return;
}

function cancelarPaciente(pacientes, paciente) {
    for (let i = 0; i < pacientes.length; i++) {
        if (pacientes[i] === paciente) {
            pacientes.splice(i, 1);
            return;
        }
    }    
}

agendarPaciente(pacientes, 'Pedro');
console.log(pacientes);
atenderPaciente(pacientes);
console.log(pacientes);
cancelarPaciente(pacientes, 'João');
console.log(pacientes);
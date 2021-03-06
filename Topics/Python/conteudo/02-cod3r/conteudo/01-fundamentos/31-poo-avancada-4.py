class Humano:
    # Atributo de classe
    especie = 'Homo Sapiens'

    # Pertence a classe Humano
    @staticmethod
    def especies():
        return ('Habilis', 'Erectus', 'Neanderthalensis', 'Sapiens')

    # Pertence a uma classe, ele permite o polimorfismo
    @classmethod
    def is_evoluido(cls):
        return cls.especie.split(' ')[-1] == cls.especies()[-1]

    def __init__(self, nome):
        # Atributo de instância
        self.nome = nome

    @property
    def idade(self):
        return self._idade

    @idade.setter
    def setIdade(self, idade):
        if idade < 0:
            raise ValueError('Idade precisa ser positiva')
        else:
            self._idade = idade


    # Método de instância
    def das_cavernas(self):
        self.especie = 'Homo Neanderthalensis'

    def teste(self):
        print('teste')


if __name__ == '__main__':
    jose = Humano('José')
    jose.idade = -2

    print(jose.idade)
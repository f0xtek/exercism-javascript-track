const PROTEIN_CODONS = {
    Methionine: ['AUG'],
    Phenylalanine: ['UUU', 'UUC'],
    Leucine: ['UUA', 'UUG'],
    Serine: ['UCU', 'UCC', 'UCA', 'UCG'],
    Tyrosine: ['UAU', 'UAC'],
    Cysteine: ['UGU', 'UGC'],
    Tryptophan: ['UGG'],
    STOP: ['UAA', 'UAG', 'UGA'],
};

const findCodon = (codon) => {
    for (const name in PROTEIN_CODONS) {
        if (PROTEIN_CODONS[name].includes(codon)) return name;
    }
    return false;
};

export const translate = (rna) => {
    if (!rna) return [];

    const codons = rna.match(/.{1,3}/g).map(findCodon),
        stop = codons.findIndex((n) => n === 'STOP');

    if (codons.some((n) => !n)) throw new Error('Invalid codon');

    return stop === -1 ? codons : codons.slice(0, stop);
};
